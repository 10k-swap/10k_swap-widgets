<template>
  <Modal v-model="showModal" :title="'Account'">
    <div class="l0k-swap-account-modal-card">
      <div class="l0k-swap-account-modal-card-top">
        <Text color="secondary-text" size="small"> {{ `Connected with ${wallet}` }}</Text>
        <Button type="danger" size="small" @click="onDisconnect"> Disconnect </Button>
      </div>
      <div class="l0k-swap-account-modal-card-account">
        <div class="account">
          <UserIcon />
          <Text size="md" bold>
            {{ account && shortenAddress(account) }}
          </Text>
        </div>
        <div class="copy" v-if="!copySuccess" id="l0k-swap-account-modal-copy-address" :data-clipboard-text="account">
          <CopyIcon color="secondary" width="15px" />
          <Text size="small" :color="'secondary-text'" v-show="!isMobile">Copy</Text>
        </div>
        <Text v-else size="small" :color="'secondary-text'">Copy Success </Text>
      </div>
    </div>
    <RecentTransactions />
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import ClipboardJS from 'clipboard'
import Modal from '../Modal/Modal.vue'
import Text from '../Text/Text.vue'
import Button from '../Button/Button'
import RecentTransactions from '../RecentTransactions/RecentTransactions.vue'
import { UserIcon, CopyIcon } from '../Svg'
import { useStarknet } from '../../starknet/providers/starknet'
import useConnectorWallet from '../../hooks/useConnectorWallet'
import useIsMobile from '../../hooks/useIsMobile'
import { shortenAddress } from '../../utils'
import { useModalStateManager } from '../../providers/ModalStateProvider/hooks'

export default defineComponent({
  components: {
    Modal,
    Button,
    Text,
    CopyIcon,
    UserIcon,
    RecentTransactions,
  },
  setup() {
    const [{ showAccountModal }, toggleModal] = useModalStateManager()
    const {
      state: { account },
      disconnect,
    } = useStarknet()
    const wallet = useConnectorWallet()
    const isMobile = useIsMobile()

    const copySuccess = ref(false)

    const showModal = computed({
      get: () => showAccountModal.value,
      set(newValue) {
        toggleModal('account', newValue)
      },
    })

    onMounted(() => {
      const clipboard = new ClipboardJS('#l0k-swap-account-modal-copy-address')

      clipboard.on('success', () => {
        copySuccess.value = true
        setTimeout(() => (copySuccess.value = false), 2000)
      })
    })

    const onDisconnect = () => {
      disconnect()
      showModal.value = false
    }

    return {
      showModal,
      wallet,
      account,
      isMobile,
      copySuccess,

      shortenAddress,
      onDisconnect,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

.l0k-swap-account-modal-card {
  padding: 15px;
  border-radius: 20px;
  background: $color-bg-plain;

  .l0k-swap-account-modal-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .l0k-swap-account-modal-card-account {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    .account {
      display: flex;
      align-items: center;

      svg {
        margin-right: 8px;
      }
    }

    .copy {
      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        margin-right: 6px;
      }
    }
  }
}
</style>
