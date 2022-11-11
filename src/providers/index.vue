<template>
  <StarknetProvider :connectors="connectors">
    <slot></slot>
  </StarknetProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getInstalledInjectedConnectors } from '../starknet/connectors'
import StarknetProvider from '../../starknet/providers/index.vue'
// import { TransactionRefreshData } from '../../starknet/providers/transaction'

const connectors = getInstalledInjectedConnectors()

export default defineComponent({
  components: {
    StarknetProvider,
  },
  setup() {
    return {
      connectors,
    }
  },
})
</script>
