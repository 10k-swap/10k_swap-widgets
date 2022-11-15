<template>
  <Providers>
    <Modals />
    <Swap />
  </Providers>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modals from './components/Modals/Modals.vue'
import Providers from './providers/index.vue'
import Swap from './components/Swap/index.vue'

export default defineComponent({
  components: {
    Modals,
    Providers,
    Swap,
  },
  setup() {},
})
</script>
