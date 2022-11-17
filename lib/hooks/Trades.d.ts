import { TokenAmount, Token, Trade } from 'l0k_swap-sdk';
import { ComputedRef } from 'vue';
/**
 * Returns the best trade for the exact amount of tokens in to the given token out
 */
export declare function useTradeExactIn(currencyAmountIn: ComputedRef<TokenAmount | undefined>, currencyOut: ComputedRef<Token | null | undefined>): ComputedRef<Trade | undefined | null>;
/**
 * Returns the best trade for the token in to the exact amount of token out
 */
export declare function useTradeExactOut(currencyIn: ComputedRef<Token | null | undefined>, currencyAmountOut: ComputedRef<TokenAmount | undefined>): ComputedRef<Trade | undefined | null>;
