<template>
  <StarknetProvider :connectors="connectors">
    <ModalStateProvider>
      <SlippageToleranceProvider>
        <SwapStateProvider>
          <slot></slot>
        </SwapStateProvider>
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
import { SwapStateProvider } from './SwapStateProvider/SwapStateProvider'

const connectors = getInstalledInjectedConnectors()

export default defineComponent({
  components: {
    StarknetProvider,
    ModalStateProvider,
    SlippageToleranceProvider,
    SwapStateProvider,
  },
  setup() {
    return {
      connectors,
    }
  },
})
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
