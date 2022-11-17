import { Percent, TokenAmount, Trade } from 'l0k_swap-sdk';
import { Field } from '../providers/SwapStateProvider/model';
export declare function basisPointsToPercent(num: number): Percent;
export declare function computeTradePriceBreakdown(trade?: Trade): {
    priceImpactWithoutFee?: Percent;
    realizedLPFee?: TokenAmount;
};
export declare function computeSlippageAdjustedAmounts(trade: Trade | undefined, allowedSlippage: number): {
    [field in Field]?: TokenAmount;
};
export declare function formatExecutionPrice(trade?: Trade, inverted?: boolean): string;
