import { ComputedRef, Ref } from 'vue';
import { Token, TokenAmount } from 'l0k_swap-sdk';
/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */
export declare function useTokenBalancesWithLoadingIndicator(address: Ref<string | undefined> | ComputedRef<string | undefined>, tokens: ComputedRef<(Token | undefined)[]>): [ComputedRef<{
    [tokenAddress: string]: TokenAmount | null | undefined;
}>, ComputedRef<boolean>];
export declare function useTokensBalances(address: Ref<string | undefined> | ComputedRef<string | undefined>, tokens: ComputedRef<(Token | undefined)[]>): ComputedRef<(TokenAmount | null | undefined)[]>;
export declare function useTokenBalances(address: Ref<string | undefined> | ComputedRef<string | undefined>, token: ComputedRef<Token | null | undefined> | Ref<Token | undefined>): ComputedRef<TokenAmount | null | undefined>;
