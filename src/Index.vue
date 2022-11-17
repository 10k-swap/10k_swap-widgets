<template>
  <Providers>
    <div class="l0k-swap">
      <Swap />
      <Modals />
    </div>
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
})
</script>
<style lang="scss">
@import './styles/global.scss';

@import './styles/index.scss';
.l0k-swap {
  position: relative;
  width: $content-width;
  min-height: 325px;
  border-radius: 20px;
  background-color: $color-bg;
}
</style>
