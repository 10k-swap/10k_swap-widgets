<template>
  <div class="wrapper">
    <SwapWidget />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SwapWidget from '../lib/index'
import '../lib/style.css'

export default defineComponent({
  components: {
    SwapWidget,
  },
})
</script>

<style lang="scss">
.wrapper {
  --10k-swap-content-width: 330px;

  // colors
  /* --10k-swap-color-primary: #2069d7; */
  --10k-swap-color-danger: #cc1010;

  // text colors
  --10k-swap-color-primary-text: #111;
  --10k-swap-color-secondary-text: #666;
  --10k-swap-color-description-text: #999;
  --10k-swap-color-light-text: #ccc;

  // bgs
  --10k-swap-color-bg: hsl(220, 23%, 97.5%);
  --10k-swap-color-bg-light: #ccc;
  --10k-swap-color-bg-plain: #eaeaea;
  --10k-swap-color-bg-secondary: #f2f2f2;
  --10k-swap-color-bg-secondary-hover: rgba(242, 242, 242, 0.5);

  --10k-swap-color-overlay: rgba(17, 17, 17, 0.4);

  // font sizes
  --10k-swap-font-size-mini: 12px;
  --10k-swap-font-size-sm: 14px;
  --10k-swap-font-size-normal: 16px;
  --10k-swap-font-size-md: 20px;
}
</style>
