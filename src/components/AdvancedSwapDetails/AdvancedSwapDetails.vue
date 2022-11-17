<template>
  <div class="advanced-swap-details">
    <div class="cell">
      <Text class="label" :size="'mini'">
        {{ isExactIn ? `Minimun received after slippage (${allowedSlippage / 100}%)` : `Maximum sold after slippage (${allowedSlippage / 100}%)` }}
      </Text>
      <Text class="value" :size="'mini'" :color="'description-text'">
        {{
          isExactIn
            ? `${slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)} ${trade?.outputAmount.token.symbol}` ?? '-'
            : `${slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4)} ${trade?.inputAmount.token.symbol}` ?? '-'
        }}
      </Text>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import { Trade, TradeType } from 'l0k_swap-sdk'
import { ONE_BIPS } from '../../constants/index'
import { computeSlippageAdjustedAmounts } from '../../utils/prices'
import Text from '../Text/Text.vue'
import { useUserSwapSlippageTolerance } from '../../providers/SlippageToleranceProvider/hooks'
import { Field } from '../../providers/SwapStateProvider/model'

export default defineComponent({
  props: {
    trade: {
      type: Object as PropType<Trade>,
    },
  },
  components: { Text },
  setup(props) {
    const { trade } = toRefs(props)

    const allowedSlippage = useUserSwapSlippageTolerance()
    const showRoute = computed(() => Boolean(trade.value && trade.value.route.path.length > 2))
    const isExactIn = computed(() => trade.value?.tradeType == TradeType.EXACT_INPUT)
    const slippageAdjustedAmounts = computed(() => computeSlippageAdjustedAmounts(trade.value, allowedSlippage.value))

    return {
      trade,
      showRoute,
      isExactIn,
      allowedSlippage,
      slippageAdjustedAmounts,
      Field,
      ONE_BIPS,
    }
  },
})
</script>

<style lang="scss">
.advanced-swap-details {
  margin-top: 8px;

  .cell {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
