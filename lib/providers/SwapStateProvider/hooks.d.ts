import { Token, Trade } from 'l0k_swap-sdk';
import { ComputedRef, ToRefs } from 'vue';
import { Field, SwapState } from './model';
export declare function useSwapState(): ToRefs<SwapState>;
export declare function useSwapActionHandlers(): {
    onCurrencySelection: (field: Field, currency: Token) => void;
    onSwitchTokens: () => void;
    onUserInput: (field: Field, typedValue: string | number) => void;
};
export declare function useDerivedSwapInfo(): {
    currencies: ComputedRef<{
        INPUT?: Token | undefined;
        OUTPUT?: Token | undefined;
    }>;
    currencyBalances: ComputedRef<{
        INPUT: import("l0k_swap-sdk").TokenAmount | null | undefined;
        OUTPUT: import("l0k_swap-sdk").TokenAmount | null | undefined;
    }>;
    parsedAmount: ComputedRef<import("l0k_swap-sdk").TokenAmount | undefined>;
    v2Trade: ComputedRef<Trade | null | undefined>;
    inputError: import("vue").Ref<string | undefined>;
};
