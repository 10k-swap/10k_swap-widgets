export declare enum Field {
    INPUT = "INPUT",
    OUTPUT = "OUTPUT"
}
export interface SwapState {
    independentField: Field;
    typedValue: string | number;
    [Field.INPUT]: {
        currencyId: string | undefined;
    };
    [Field.OUTPUT]: {
        currencyId: string | undefined;
    };
    recipient: string | null;
}
export interface SwapActions {
    replaceSwapState: ({ typedValue, recipient, field, inputCurrencyId, outputCurrencyId, }: {
        field: Field;
        typedValue: string | number;
        recipient: string | null;
        inputCurrencyId: string | undefined;
        outputCurrencyId: string | undefined;
    }) => void;
    selectCurrency: ({ currencyId, field }: {
        currencyId: string;
        field: Field;
    }) => void;
    switchCurrencies: () => void;
    typeInput: (field: Field, typedValue: string | number) => void;
    resetSwapState: () => void;
}
export declare const INIT_SWAP_STATE: {
    independentField: Field;
    typedValue: string;
    INPUT: {
        currencyId: string;
    };
    OUTPUT: {
        currencyId: string;
    };
    recipient: null;
};
