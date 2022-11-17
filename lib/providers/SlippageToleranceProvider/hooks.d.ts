import { ToRefs } from 'vue';
import { SlippageToleranceState } from './model';
export declare function useSlippageToleranceStateManager(): [ToRefs<SlippageToleranceState>, (slippageTolerance: number) => void];
export declare function useUserSwapSlippageTolerance(): import("vue").Ref<number>;
