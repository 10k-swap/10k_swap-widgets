export enum Field {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT',
}

export interface SwapState {
  independentField: Field
  typedValue: string | number
  [Field.INPUT]: {
    currencyId: string | undefined
  }
  [Field.OUTPUT]: {
    currencyId: string | undefined
  }
  // the typed recipient address , or null if swap should go to sender
  recipient: string | null
}

export interface SwapActions {
  replaceSwapState: ({
    typedValue,
    recipient,
    field,
    inputCurrencyId,
    outputCurrencyId,
  }: {
    field: Field
    typedValue: string | number
    recipient: string | null
    inputCurrencyId: string | undefined
    outputCurrencyId: string | undefined
  }) => void
  selectCurrency: ({ currencyId, field }: { currencyId: string; field: Field }) => void
  switchCurrencies: () => void
  typeInput: (field: Field, typedValue: string | number) => void
}

export const INIT_SWAP_STATE = {
  independentField: Field.INPUT,
  typedValue: '',
  [Field.INPUT]: {
    currencyId: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
  },
  [Field.OUTPUT]: {
    currencyId: '',
  },
  recipient: null,
}
