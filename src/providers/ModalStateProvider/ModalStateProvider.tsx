import { defineComponent, provide, readonly, toRefs, reactive } from 'vue'
import { ModalMethodsSymbol, ModalStateSymbol } from './const'
import { ModalState, ModalType } from './model'

export const ModalStateProvider = defineComponent({
  setup(_, { slots }) {
    const state = reactive<ModalState>({
      showAccountModal: false,
      showConnectingModal: false,
      showConnectRejectModal: false,
      showSlippageToleranceSettingsModal: false,
      showWalletModal: false,
    })

    const toggleModal = (modal: ModalType, value: boolean) => {
      switch (modal) {
        case 'account':
          state.showAccountModal = value
          break
        case 'connectReject':
          state.showConnectRejectModal = value
          break
        case 'connecting':
          state.showConnectingModal = value
          break
        case 'slippageToleranceSettings':
          state.showSlippageToleranceSettingsModal = value
          break
        case 'wallet':
          state.showWalletModal = value
          break
        default:
          break
      }
    }

    provide(ModalStateSymbol, toRefs(readonly(state)))
    provide(ModalMethodsSymbol, { toggleModal })

    return slots.default
  },
})
