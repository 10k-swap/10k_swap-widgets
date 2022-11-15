<template>
  <Providers>
    <Modals />
  </Providers>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modals from './components/Modals/Modals.vue'
import Providers from './providers/index.vue'

export default defineComponent({
  components: {
    Modals,
    Providers,
  },
  setup() {},
})
</script>
