<template>
  <div class="l0k-swap-currency-input-panel">
    <div class="inputs">
      <input type="text" :value="typedValue" @input="onInput" placeholder="0.0" pattern="^[0-9]*[.,]?[0-9]*$" />
      <TokenSelector v-if="selector" class="token-select" :token="token ?? null" :otherToken="otherToken ?? null" @select="onSelect" />
      <div class="token" v-else>
        <template v-if="slots.token">
          <slot name="token"></slot>
        </template>
        <template v-else>
          <TokenLogo :token="token" />
          <Text class="symbol" bold> {{ token?.symbol }} </Text>
        </template>
      </div>
    </div>
    <div class="balance">
      <Text :color="'description-text'" :size="'mini'">
        balance:
        {{ isNull(currencyBalance) ? 'loading...' : currencyBalance?.toSignificant() ?? '-' }}
      </Text>
      <span class="max" @click="() => onMax && onMax(currencyBalance ?? undefined)" v-if="onMax && currencyBalance"> Max </span>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import { Token, TokenAmount } from 'l0k_swap-sdk'
import TokenSelector from '../TokenSelector/TokenSelector.vue'
import TokenLogo from '../TokenLogo/TokenLogo'
import Text from '../Text/Text.vue'
import { isNull } from 'lodash'

export default defineComponent({
  props: {
    selectorDisabled: Boolean,
    token: { type: Object as PropType<Token | undefined | null> },
    otherToken: { type: Object as PropType<Token | undefined | null> },
    currencyBalance: { type: Object as PropType<TokenAmount | undefined | null> },
    value: {
      type: [String, Number],
    },
    selector: {
      default: true,
      type: Boolean,
    },
    onMax: {
      type: Function as PropType<(amount: TokenAmount | undefined) => void>,
    },
  },
  components: {
    TokenSelector,
    TokenLogo,
    Text,
  },
  emits: ['token-select', 'input'],
  setup(props, { emit, slots }) {
    const { value, currencyBalance } = toRefs(props)

    const typedValue = computed({
      get: () => value.value,
      set(newValue) {
        emit('input', newValue)
      },
    })

    const onInput = (e: InputEvent) => {
      const nextUserInput = (e.target as HTMLInputElement).value.replace(/,/g, '.') ?? ''

      if (!new RegExp(/^[0-9]*[.,]?[0-9]*$/).test(nextUserInput) && nextUserInput !== '') {
        ;(e.target as HTMLInputElement).value = ''
        typedValue.value = ''
        return
      }

      typedValue.value = nextUserInput
    }

    const onSelect = (token: Token) => {
      emit('token-select', token)
    }

    return {
      onSelect,
      onInput,
      isNull,

      slots,
      typedValue,
      currencyBalance,
    }
  },
})
</script>

<style lang="scss">
@import '../../styles/index.scss';

.l0k-swap-currency-input-panel {
  border-radius: 20px;
  background: $color-bg-secondary;
  padding: 16px 16px 10px 16px;

  .inputs {
    display: flex;
    justify-content: space-between;

    input {
      width: 100%;
      background: transparent;
      border: 0;
      font-weight: 700;
      font-size: 28px;
      margin-right: 10px;
      outline: none;

      &::placeholder {
        color: $color-light-text;
      }

      &:hover {
        border: 0;
      }
    }

    .token-select {
      width: 120px;
    }

    .token {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: fit-content;

      .symbol {
        margin-left: 8px;
      }
    }
  }

  .balance {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 8px;
    .max {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 18px;
      margin-left: 8px;
      border-radius: 9px;
      background: $color-primary;
      font-size: $font-size-mini;
      color: $color-white;
      cursor: pointer;
    }
  }
}
</style>
