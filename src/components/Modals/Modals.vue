<template>
  <AccountModal />
  <ConnectingModal />
  <ConnectRejectModal />
  <WalletModal />
  <SlippageToleranceSettingsModal />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AccountModal from '../AccountModal/AccountModal.vue'
import WalletModal from '../WalletModal/index.vue'
import ConnectingModal from '../ConnectingModal/ConnectingModal.vue'
import ConnectRejectModal from '../ConnectRejectModal/ConnectRejectModal.vue'
import SlippageToleranceSettingsModal from '../SlippageToleranceSettingsModal/SlippageToleranceSettingsModal.vue'

export default defineComponent({
  components: {
    AccountModal,
    WalletModal,
    ConnectingModal,
    ConnectRejectModal,
    SlippageToleranceSettingsModal,
  },
})
</script>
