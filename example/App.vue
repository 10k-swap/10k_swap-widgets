<template>
  <div><Index /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Index from '../dist/index'
import '../dist/style.css'

export default defineComponent({
  components: {
    Index,
  },
  setup() {},
})
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  padding: 30%;
}
</style>
