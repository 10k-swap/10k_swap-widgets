import { cloneDeep } from 'lodash'
import { defineComponent, provide, readonly, toRefs, reactive } from 'vue'
import { SwapStateSymbol, SwapMethodsSymbol } from './const'
import { Field, INIT_SWAP_STATE, SwapActions, SwapState } from './model'

export const SwapStateProvider = defineComponent({
  setup(_, { slots }) {
    const state = reactive<SwapState>(cloneDeep(INIT_SWAP_STATE))

    const actions: SwapActions = {
      replaceSwapState({ field, typedValue, inputCurrencyId, outputCurrencyId, recipient }) {
        state.independentField = field
        state.typedValue = typedValue
        state[Field.INPUT] = {
          currencyId: inputCurrencyId,
        }
        state[Field.OUTPUT] = {
          currencyId: outputCurrencyId,
        }
        state.recipient = recipient
      },
      selectCurrency({ currencyId, field }) {
        const otherField = field === Field.INPUT ? Field.OUTPUT : Field.INPUT
        if (currencyId === state[otherField].currencyId) {
          // the case where we have to swap the order
          state.independentField = state.independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT
          state[otherField] = { currencyId: state[field].currencyId }
          state[field] = { currencyId }
          return
        }
        state[field] = { currencyId }
        // the normal case
      },
      switchCurrencies() {
        const input = state[Field.INPUT].currencyId
        const output = state[Field.OUTPUT].currencyId
        state.independentField = state.independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT
        state[Field.INPUT] = { currencyId: output }
        state[Field.OUTPUT] = { currencyId: input }
      },
      typeInput(field: Field, typedValue: string | number) {
        state.typedValue = typedValue.toString()
        state.independentField = field
      },
      resetSwapState() {
        state[Field.INPUT] = {
          currencyId: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
        }
        state[Field.OUTPUT] = { currencyId: '' }
      },
    }

    provide(SwapStateSymbol, toRefs(readonly(state)))
    provide(SwapMethodsSymbol, actions)

    return slots.default
  },
})
