<template>
  <Modal v-model="showModal" :title="'Transaction Settings'">
    <div class="l0k-swap-slippage-tolerance-settings-modal">
      <div class="l0k-swap-slippage-tolerance-settings-tips">
        <Text :size="'small'">Slippage tolerance: </Text>
        <Text :size="'small'" :color="'secondary-text'">
          Your transaction will revert if the price changes unfavorably by more than this percentage.
        </Text>
      </div>
      <div class="l0k-swap-slippage-tolerance-settings-set">
        <Button class="auto" @click="onAuto" :type="'primary'"> Auto </Button>
        <div class="btn" @click="typedValue = 0.1">0.1 %</div>
        <div class="btn" @click="typedValue = 0.5">0.5 %</div>
        <div class="btn" @click="typedValue = 1">1 %</div>
        <div class="input-wrap">
          <input class="input" type="text" v-model="typedValue" />
        </div>
      </div>
      <div class="l0k-swap-slippage-tolerance-settings-confirm">
        <Button @click="onConfirm" :type="'primary'" bold :disabled="isDisabled"> Confirm </Button>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import Modal from '../Modal/Modal.vue'
import Text from '../Text/Text.vue'
import Button from '../Button/Button'
import { useModalStateManager } from '../../providers/ModalStateProvider/hooks'
import { useSlippageToleranceStateManager } from '../../providers/SlippageToleranceProvider/hooks'
import { INITIAL_SWAP_ALLOWED_SLIPPAGE, MAX_SLIPPAGE, RISKY_SLIPPAGE_LOW } from '../../providers/SlippageToleranceProvider/model'

export default defineComponent({
  components: {
    Modal,
    Text,
    Button,
  },
  setup() {
    const [{ showSlippageToleranceSettingsModal }, toggleModal] = useModalStateManager()
    const [{ swapSlippageTolerance }, toggleSlippageTolerance] = useSlippageToleranceStateManager()

    const typedValue = ref<number | string>('')

    const parsedTypedValue = computed(() => {
      const typed = typedValue.value
      return Math.trunc((typeof typed === 'string' ? parseFloat(typed) : typed) * 100)
    })

    const showModal = computed({
      get: () => showSlippageToleranceSettingsModal.value,
      set(newValue) {
        toggleModal('slippageToleranceSettings', newValue)
      },
    })
    const isDisabled = computed(() => {
      const value = parsedTypedValue.value
      if (Number.isNaN(value)) {
        return true
      }
      if (value > MAX_SLIPPAGE || value < RISKY_SLIPPAGE_LOW) {
        return true
      }
      return false
    })

    watch([swapSlippageTolerance], () => {
      typedValue.value = swapSlippageTolerance.value / 100
    })

    const onAuto = () => {
      typedValue.value = INITIAL_SWAP_ALLOWED_SLIPPAGE / 100
    }
    const onConfirm = () => {
      toggleSlippageTolerance(parsedTypedValue.value)
      showModal.value = false
    }

    onMounted(() => {
      typedValue.value = swapSlippageTolerance.value / 100
    })

    return {
      showModal,
      typedValue,
      isDisabled,

      onAuto,
      onConfirm,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

.l0k-swap-slippage-tolerance-settings-modal {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 440px;
  margin: 0 auto;

  .l0k-swap-slippage-tolerance-settings-tips {
    div {
      display: inline;
    }
  }

  .l0k-swap-slippage-tolerance-settings-set {
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
    margin-top: 20px;

    .auto {
      width: 80px;
      margin-right: 8px;
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 40px;
      border: 2px solid $color-primary;
      border-radius: 20px;
      box-sizing: border-box;
      margin-right: 8px;
      font-size: $font-size-sm;
      cursor: pointer;
    }
    .input-wrap {
      position: relative;
      width: 145px;
      box-sizing: border-box;
      height: 40px;
      background: $color-white;
      border-radius: 20px;
      overflow: hidden;
      padding-right: 40px;

      &::after {
        content: '%';
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        font-size: $font-size-sm;
        color: $color-description-text;
      }

      .input {
        width: 100%;
        background: transparent;
        font-size: $font-size-sm;
        height: 40px;
        border: 0;
        padding: 10px 0 10px 16px;
        box-sizing: border-box;
        text-align: right;
        outline: none;

        &:focus {
          border: 0;
        }
      }
    }

    @include mobile {
      display: grid;
      grid-template-columns: 90px 68px 68px 60px;
      grid-template-rows: 40px 52px;
      .input-wrap {
        display: flex;
        grid-column: 1/5;
        grid-row: 2/2;
        margin-top: 12px;
        width: 100%;
      }
    }
  }

  .l0k-swap-slippage-tolerance-settings-confirm {
    margin-top: 20px;

    button {
      width: 160px;
    }
  }
}
</style>
