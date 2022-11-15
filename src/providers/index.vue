<template>
  <StarknetProvider :connectors="connectors">
    <ModalStateProvider>
      <SlippageToleranceProvider>
        <slot></slot>
      </SlippageToleranceProvider>
    </ModalStateProvider>
  </StarknetProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getInstalledInjectedConnectors } from '../starknet/connectors'
import StarknetProvider from '../starknet/providers/index.vue'
import { ModalStateProvider } from './ModalStateProvider/ModalStateProvider'
import { SlippageToleranceProvider } from './SlippageToleranceProvider/SlippageToleranceProvider'
// import { TransactionRefreshData } from '../../starknet/providers/transaction'

const connectors = getInstalledInjectedConnectors()

export default defineComponent({
  components: {
    StarknetProvider,
    ModalStateProvider,
    SlippageToleranceProvider,
  },
  setup() {
    return {
      connectors,
    }
  },
})
</script>
