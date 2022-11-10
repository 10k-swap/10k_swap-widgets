<template>
  <StarknetLibraryProvider :defaultProvider="defaultProvider" :connectors="connectors">
    <StarknetBlockProvider>
      <StarknetTransactionManagerProvider :onTransactionRefresh="onTransactionRefresh">
        <slot></slot>
      </StarknetTransactionManagerProvider>
    </StarknetBlockProvider>
  </StarknetLibraryProvider>
</template>

<script lang="ts">
import { ProviderInterface } from 'starknet'
import { defineComponent, PropType, toRefs } from 'vue'

import { StarknetBlockProvider } from './block'
import { StarknetTransactionManagerProvider, TransactionRefreshData } from './transaction'
import { StarknetLibraryProvider } from './starknet'
import { Connector } from '../connectors'
import { InjectedConnectorOptions } from '../connectors/injected'

export default defineComponent({
  props: {
    defaultProvider: Object as PropType<ProviderInterface>,
    connectors: {
      type: Array as PropType<Connector<InjectedConnectorOptions>[]>,
      required: true,
    },
  },
  components: {
    StarknetBlockProvider,
    StarknetTransactionManagerProvider,
    StarknetLibraryProvider,
  },
  emits: ['transactionRefresh'],
  setup(props, { emit }) {
    const { defaultProvider, connectors } = toRefs(props)

    const onTransactionRefresh = (data: TransactionRefreshData) => {
      emit('transactionRefresh', data)
    }

    return {
      defaultProvider,
      connectors,

      onTransactionRefresh,
    }
  },
})
</script>
