import { ComputedRef } from 'vue';
import { Token } from 'l0k_swap-sdk';
export declare function useToken(tokenAddress: ComputedRef<string | undefined>): ComputedRef<Token | undefined | null>;
