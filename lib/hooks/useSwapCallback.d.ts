import { Trade } from 'l0k_swap-sdk';
import { Ref } from 'vue';
declare enum SwapCallbackState {
    INVALID = 0,
    LOADING = 1,
    VALID = 2
}
export declare function useSwapCallback(trade: Ref<Trade | null | undefined>, // trade to execute, required
allowedSlippage?: Ref<number> | number, // in bips
deadline?: number): Ref<{
    state: SwapCallbackState;
    callback: null | (() => Promise<string>);
    error: string | null;
}>;
export default useSwapCallback;
