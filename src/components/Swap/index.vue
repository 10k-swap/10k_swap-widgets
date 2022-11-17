<template>
  <div class="l0k-swap-wrapper">
    <div class="l0k-swap-header">
      <Text class="l0k-swap-title" bold> Swap </Text>
      <div class="l0k-swap-account" @click="showAccount" v-if="account">
        {{ account && shortenAddress(account) }}
      </div>
      <SettingIcon class="l0k-swap-setup" width="17px" @click="onSetting" />
    </div>
    <div class="l0k-swap-content">
      <CurrencyInputPanel
        :value="formattedAmounts[Field.INPUT]"
        :token="currencies[Field.INPUT]"
        :currencyBalance="currencyBalances[Field.INPUT]"
        :onMax="onMax"
        @token-select="onInputSelect"
        @input="handleTypeInput"
      />
      <div class="switch-wrap">
        <SwitchIcon class="switch" @click="onSwitch" />
      </div>
      <CurrencyInputPanel
        :value="formattedAmounts[Field.OUTPUT]"
        :token="currencies[Field.OUTPUT]"
        :currencyBalance="currencyBalances[Field.OUTPUT]"
        :placement="'left'"
        @token-select="onOutputSelect"
        @input="handleTypeOutput"
      />
      <div class="swap-info">
        <div class="loading" v-if="loadingTrade">
          <LoadingIcon class="icon" :color="'minor'" width="12px" />
          <Text :color="'description-text'" :size="'mini'"> fetching... </Text>
        </div>
        <div class="info" v-else-if="v2Trade">
          <TradePrice :price="v2Trade.executionPrice" />
          <AdvancedSwapDetails :trade="v2Trade" />
        </div>
      </div>
      <div class="swap">
        <Button :type="'primary'" :size="'large'" bold v-if="!account" @click="openWalletModal"> Connect wallet to swap </Button>
        <Button :type="'primary'" :size="'large'" bold disabled v-else-if="noTrade && userHasSpecifiedInputOutput"> Insufficient Liquidity </Button>
        <Button
          :type="'primary'"
          :size="'large'"
          bold
          v-else
          @click="onSwapClick"
          :disabled="!isValid || loadingTrade || !v2Trade || (tradeToConfirm && !!swapCallbackError)"
        >
          {{ !isValid ? swapInputError : 'Swap' }}
        </Button>
      </div>
    </div>
  </div>
  <ConfirmModal :show="swapState.showConfirm" :trade="tradeToConfirm" @swap="handleSwap" />
  <WaittingModal :show="swapState.attemptingTxn" :desc="summary" @dismiss="swapState.attemptingTxn = false" />
  <RejectedModal :show="showRejectedModal" @dismiss="onReset" />
  <ScuccessModal :show="!!swapState.txHash" :tx="swapState.txHash" @dismiss="onReset" />
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from 'vue'
import Text from '../../components/Text/Text.vue'
import Button from '../../components/Button/Button'
import CurrencyInputPanel from '../../components/CurrencyInputPanel/index.vue'
import TradePrice from '../TradePrice/TradePrice.vue'
import AdvancedSwapDetails from '../AdvancedSwapDetails/AdvancedSwapDetails.vue'
import ConfirmModal from '../ConfirmModal/ConfirmModal.vue'
import WaittingModal from '../../components/transaction/WaittingModal.vue'
import RejectedModal from '../../components/transaction/RejectedModal.vue'
import ScuccessModal from '../../components/transaction/ScuccessModal.vue'
import { SettingIcon, SwitchIcon, LoadingIcon } from '../../components/Svg'
import { Token, Trade, JSBI, TokenAmount } from 'l0k_swap-sdk'
import useSwapCallback from '../../hooks/useSwapCallback'
import { useStarknet } from '../../starknet/providers/starknet'
import useSwapSummary from '../../hooks/useSwapSummary'
import { getDeductGasMaxAmount, shortenAddress } from '../../utils'
import { useModalStateManager, useOpenWalletModal } from '../../providers/ModalStateProvider/hooks'
import { useUserSwapSlippageTolerance } from '../../providers/SlippageToleranceProvider/hooks'
import { useDerivedSwapInfo, useSwapActionHandlers, useSwapState } from '../../providers/SwapStateProvider/hooks'
import { Field } from '../../providers/SwapStateProvider/model'

export default defineComponent({
  components: {
    Text,
    Button,
    SettingIcon,
    CurrencyInputPanel,
    SwitchIcon,
    LoadingIcon,
    TradePrice,
    AdvancedSwapDetails,
    ConfirmModal,
    WaittingModal,
    RejectedModal,
    ScuccessModal,
  },
  setup() {
    const openWalletModal = useOpenWalletModal()
    const [, toggleModal] = useModalStateManager()
    const userSwapSlippageTolerance = useUserSwapSlippageTolerance()
    const {
      state: { account, chainId },
    } = useStarknet()

    // swap state
    const { independentField, typedValue } = useSwapState()
    const { v2Trade, currencyBalances, parsedAmount, currencies, inputError: swapInputError } = useDerivedSwapInfo()
    const { onSwitchTokens, onCurrencySelection, onUserInput, resetSwapState } = useSwapActionHandlers()
    const isValid = computed(() => !swapInputError.value)
    const dependentField = computed(() => (independentField.value === Field.INPUT ? Field.OUTPUT : Field.INPUT))

    const parsedAmounts = computed(() => ({
      [Field.INPUT]: independentField.value === Field.INPUT ? parsedAmount.value : v2Trade.value?.inputAmount,
      [Field.OUTPUT]: independentField.value === Field.OUTPUT ? parsedAmount.value : v2Trade.value?.outputAmount,
    }))
    const formattedAmounts = computed(() => ({
      [independentField.value]: typedValue.value,
      [dependentField.value]: parsedAmounts.value[dependentField.value]?.toSignificant(6) ?? '',
    }))
    const userHasSpecifiedInputOutput = computed(() =>
      Boolean(
        currencies.value[Field.INPUT] && currencies.value[Field.OUTPUT] && parsedAmounts.value[independentField.value]?.greaterThan(JSBI.BigInt(0))
      )
    )
    const noRoute = computed(() => !v2Trade.value?.route)
    const noTrade = computed(() => v2Trade.value === undefined)
    const loadingTrade = computed(() => v2Trade.value === null)
    const showRejectedModal = computed(() => !!swapState.swapErrorMessage && swapState.swapErrorMessage.includes('User abort'))

    const tradeToConfirm = ref<Trade>()
    const swapState = reactive<{
      showConfirm: boolean
      attemptingTxn: boolean
      swapErrorMessage: string | undefined
      txHash: string | undefined
    }>({
      showConfirm: false,
      attemptingTxn: false,
      swapErrorMessage: undefined,
      txHash: undefined,
    })

    const summary = useSwapSummary(tradeToConfirm)
    const swapCallbacks = useSwapCallback(tradeToConfirm, userSwapSlippageTolerance)
    const swapCallbackError = computed(() => swapCallbacks.value.error)

    const handleTypeInput = (value: string | number) => {
      onUserInput(Field.INPUT, value)
    }
    const handleTypeOutput = (value: string | number) => {
      onUserInput(Field.OUTPUT, value)
    }
    const onSetting = () => {
      toggleModal('slippageToleranceSettings', true)
    }
    const onInputSelect = (inputCurrency: Token) => {
      onCurrencySelection(Field.INPUT, inputCurrency)
    }
    const onOutputSelect = (inputCurrency: Token) => {
      onCurrencySelection(Field.OUTPUT, inputCurrency)
    }
    const onSwitch = () => {
      onSwitchTokens()
    }
    const onSwapClick = () => {
      if (!v2Trade.value) {
        return
      }
      swapState.showConfirm = true
      tradeToConfirm.value = v2Trade.value
    }

    const showAccount = () => {
      toggleModal('account', true)
    }

    const handleSwap = () => {
      if (!swapCallbacks.value.callback) {
        return
      }
      swapState.showConfirm = false
      swapState.attemptingTxn = true
      swapCallbacks.value
        .callback()
        .then((hash) => {
          swapState.attemptingTxn = false
          swapState.txHash = hash
        })
        .catch((error) => {
          swapState.attemptingTxn = false
          swapState.txHash = undefined
          swapState.swapErrorMessage = error.message
        })
    }

    const onReset = () => {
      if (swapState.txHash) {
        onUserInput(Field.INPUT, '')
      }
      swapState.showConfirm = false
      tradeToConfirm.value = undefined
      swapState.attemptingTxn = false
      swapState.swapErrorMessage = undefined
      swapState.txHash = undefined
    }

    const onMax = (maxInputAmount: TokenAmount | undefined) => {
      const amount = getDeductGasMaxAmount(maxInputAmount)
      if (amount) {
        onUserInput(Field.INPUT, amount.toExact())
      }
    }

    watch(chainId, () => {
      resetSwapState()
    })

    return {
      swapState,
      Field,
      isValid,
      v2Trade,
      summary,
      account,
      noRoute,
      noTrade,
      loadingTrade,
      formattedAmounts,
      currencies,
      currencyBalances,
      userHasSpecifiedInputOutput,
      swapInputError,
      swapCallbackError,
      showRejectedModal,
      tradeToConfirm,

      onSetting,
      onInputSelect,
      openWalletModal,
      onSwitch,
      onOutputSelect,
      onSwapClick,
      onReset,
      onMax,
      handleTypeInput,
      handleTypeOutput,
      handleSwap,
      shortenAddress,
      showAccount,
    }
  },
})
</script>

<style lang="scss">
@import '../../styles/index.scss';

.l0k-swap-wrapper {
  .l0k-swap-header {
    display: flex;
    justify-content: space-between;
    padding: 16px 16px 10px 16px;
    .l0k-swap-account {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      margin-right: 10px;
      cursor: pointer;
    }
    .l0k-swap-setup {
      cursor: pointer;
    }
  }

  .l0k-swap-content {
    padding: 0 15px 15px 15px;
    .switch-wrap {
      position: relative;
      height: 12px;
      cursor: pointer;

      .switch {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
    }

    .swap-info {
      margin-top: 8px;

      .loading {
        display: flex;
        align-items: center;

        .icon {
          margin-right: 6px;
        }
      }
    }

    .swap {
      display: flex;
      margin-top: 10px;
    }
  }
}
</style>
