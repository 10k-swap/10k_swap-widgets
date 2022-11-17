import { Ref } from 'vue';
import { TokenAmount, Trade } from 'l0k_swap-sdk';
export declare function getSwapSummary(trade: Trade, swapApproveAmount?: TokenAmount): string;
export default function useSwapSummary(trade: Ref<Trade | null | undefined>): import("vue").ComputedRef<string | undefined>;
