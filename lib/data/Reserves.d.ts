import { Pair, Token } from 'l0k_swap-sdk';
import { ComputedRef, Ref } from 'vue';
export declare enum PairState {
    LOADING = 0,
    NOT_EXISTS = 1,
    EXISTS = 2,
    INVALID = 3
}
export declare function usePairs(tokens: ComputedRef<[Token | undefined, Token | undefined][]>): ComputedRef<Array<[PairState, Pair | undefined | null]>>;
export declare function usePair(tokenA: Ref<Token | undefined> | ComputedRef<Token | undefined>, tokenB?: ComputedRef<Token | undefined> | Ref<Token | undefined>): ComputedRef<[PairState, Pair | undefined | null]>;
