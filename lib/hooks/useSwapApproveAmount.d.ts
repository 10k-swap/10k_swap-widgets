import { Ref } from 'vue';
import { Trade } from 'l0k_swap-sdk';
export declare function getSwapApproveAmount(trade: Trade, allowedSlippage: number): import("l0k_swap-sdk").TokenAmount;
export default function useSwapApproveAmount(trade: Ref<Trade | null | undefined>, allowedSlippage: Ref<number> | number): import("vue").ComputedRef<import("l0k_swap-sdk").TokenAmount | undefined>;
