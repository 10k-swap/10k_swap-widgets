<template>
  <Modal v-model="showModal">
    <div class="l0k-swap-connecting-modal">
      <div class="content">
        <LoadingIcon width="48" :color="'secondary'" />
        <Text bold> Connecting... </Text>
      </div>
      <div class="card">
        <Text :size="'mini'" :color="'description-text'">
          By connecting a wallet，you agree to <span style="color: #3bc6a5">10K Swap Labs’ Terms of sevice</span> and acknowledge that you have read
          and understand the <span style="color: #3bc6a5">10K Swap Protocl Disclaimer.</span>
        </Text>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Modal from '../Modal/Modal.vue'
import Text from '../Text/Text.vue'
import { LoadingIcon } from '../Svg'
import { useModalStore } from '../../state'

export default defineComponent({
  components: {
    Modal,
    LoadingIcon,
    Text,
  },
  setup() {
    const store = useModalStore()

    const showModal = computed({
      get: () => store.showConnectingModal,
      set(newValue) {
        store.toggleConnectingModal(newValue)
      },
    })

    return {
      showModal,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

.l0k-swap-connecting-modal {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-6px);

    svg {
      margin-bottom: 10px;
    }
  }

  .card {
    padding: 16px;
    margin-top: 15px;
    border-radius: 20px;
    background: $color-bg-secondary;
  }
}
</style>
