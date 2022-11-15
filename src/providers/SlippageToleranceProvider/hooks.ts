import { inject, toRefs, ToRefs } from 'vue'
import { noop } from '../../starknet/utils'
import { SlippageToleranceMethodsSymbol, SlippageToleranceStateSymbol } from './const'
import { INITIAL_SWAP_ALLOWED_SLIPPAGE, SlippageToleranceState } from './model'

export function useSlippageToleranceStateManager(): [ToRefs<SlippageToleranceState>, (slippageTolerance: number) => void] {
  const state = inject<ToRefs<SlippageToleranceState>>(SlippageToleranceStateSymbol)
  const methods = inject<{ toggleSlippageTolerance: (slippageTolerance: number) => void }>(SlippageToleranceMethodsSymbol) ?? {
    toggleSlippageTolerance: noop,
  }

  return [state ?? toRefs({ swapSlippageTolerance: INITIAL_SWAP_ALLOWED_SLIPPAGE }), methods.toggleSlippageTolerance]
}

export function useUserSwapSlippageTolerance() {
  const [{ swapSlippageTolerance }] = useSlippageToleranceStateManager()

  return swapSlippageTolerance
}
