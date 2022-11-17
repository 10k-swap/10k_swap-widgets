<template>
  <Modal v-model="showModal">
    <div class="l0k-swap-connect-reject-modal">
      <Text class="title" bold :size="'md'" :color="'danger'"> Error Connectir </Text>
      <div class="card">
        <Text :size="'small'" :color="'secondary-text'">
          The connection attempt failed.Please click try again and follow the steps to connect in your wallet.
        </Text>
        <Button class="retry" :type="'primary'" bold @click="onRetry"> Try Again </Button>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Modal from '../Modal/Modal.vue'
import Text from '../Text/Text.vue'
import Button from '../Button/Button'
import { useModalStateManager, useOpenWalletModal } from '../../providers/ModalStateProvider/hooks'

export default defineComponent({
  components: {
    Modal,
    Text,
    Button,
  },
  setup() {
    const [{ showConnectRejectModal }, toggleModal] = useModalStateManager()
    const openWalletModal = useOpenWalletModal()

    const showModal = computed({
      get: () => showConnectRejectModal.value,
      set(newValue) {
        toggleModal('connectReject', newValue)
      },
    })

    const onRetry = () => {
      showModal.value = false
      openWalletModal()
    }

    return {
      showModal,

      onRetry,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

.l0k-swap-connect-reject-modal {
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    transform: translateY(-10px);
  }

  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    margin-top: 10px;
    border-radius: 20px;
    background: $color-bg-secondary;

    .retry {
      margin: 20px auto 0 auto;
    }
  }
}
</style>
