<template>
  <Modal v-model="showModal" :title="'connect a wallet'">
    <div class="l0k-swap-wallet-modal">
      <div class="discoverys">
        <div class="discovery" v-for="item in discovery" :key="item.id" @click="onWalletSelect(item)">
          <img :src="item.icon" />
          <Text bold :color="'secondary-text'"> {{ isInstalled(item.id) ? item.name : `Install ${item.name}` }} </Text>
        </div>
      </div>
      <!-- <div class="card">
        <Text :color="'secondary-text'" :size="'small'"> {{ t('wallet_modal.tips') }} </Text>
      </div> -->
    </div>
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, toRaw } from 'vue'
import Modal from '../Modal/Modal.vue'
import discovery from './discovery'
import Text from '../Text/Text.vue'
import getBrowserName from '../../utils/getBrowserName'
import { useStarknet } from '../../starknet/providers/starknet'
import { WalletProvider } from './types'
import useConnector from '../../hooks/useConnector'
import { useModalStateManager } from '../../providers/ModalStateProvider/hooks'

const normalId = (id: string) => id.replace(/\s|-/g, '').toLowerCase()

export default defineComponent({
  components: {
    Modal,
    Text,
  },
  setup() {
    const [{ showWalletModal }, toggleModal] = useModalStateManager()

    const {
      state: { connectors },
    } = useStarknet()
    const { onConnect } = useConnector()

    const showModal = computed({
      get: () => showWalletModal.value,
      set(newValue) {
        toggleModal('wallet', newValue)
      },
    })

    const isInstalled = (id: string) => {
      return !!connectors.value.find((item) => normalId(item.options.id) === id)
    }

    const onWalletSelect = (wallet: WalletProvider) => {
      if (!isInstalled(wallet.id)) {
        const browser = getBrowserName()
        if (browser && wallet.downloads[browser]) {
          window.open(wallet.downloads[browser])
        }
        return
      }

      const connector = connectors.value.find((item) => normalId(item.options.id) === wallet.id)
      if (connector) {
        onConnect(toRaw(connector))
      }
      showModal.value = false
    }

    return {
      showModal,
      discovery,

      isInstalled,
      onWalletSelect,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

.l0k-swap-wallet-modal {
  .discoverys {
    .discovery {
      display: flex;
      align-items: center;
      padding: 10px;
      border: 2px solid $color-bg-plain;
      border-radius: 12px;
      margin-bottom: 8px;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
      img {
        width: 24px;
        height: 24px;
        border: 1px solid $color-bg-secondary;
        border-radius: 8px;
        box-sizing: border-box;
        margin-right: 4px;
      }
    }
  }

  .card {
    padding: 16px;
    background: $color-bg-secondary;
    border-radius: 20px;
    margin-top: 20px;
  }
}
</style>
