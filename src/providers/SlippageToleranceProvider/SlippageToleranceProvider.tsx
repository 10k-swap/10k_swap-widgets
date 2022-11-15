import { defineComponent, provide, readonly, toRefs, reactive } from 'vue'
import { SlippageToleranceStateSymbol, SlippageToleranceMethodsSymbol } from './const'
import { INITIAL_SWAP_ALLOWED_SLIPPAGE, SlippageToleranceState } from './model'
import SlippageStorageManager from './SlippageStorageManager'

export const SlippageToleranceProvider = defineComponent({
  setup(_, { slots }) {
    const state = reactive<SlippageToleranceState>({
      swapSlippageTolerance: SlippageStorageManager.get()?.swap ?? INITIAL_SWAP_ALLOWED_SLIPPAGE,
    })

    const toggleSlippageTolerance = (slippageTolerance: number) => {
      state.swapSlippageTolerance = slippageTolerance

      SlippageStorageManager.set({ swap: slippageTolerance })
    }

    provide(SlippageToleranceStateSymbol, toRefs(readonly(state)))
    provide(SlippageToleranceMethodsSymbol, { toggleSlippageTolerance })

    return slots.default
  },
})
