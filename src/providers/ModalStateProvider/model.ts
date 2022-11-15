export type ModalType = 'account' | 'connecting' | 'connectReject' | 'slippageToleranceSettings' | 'wallet'

export interface ModalState {
  showAccountModal: boolean
  showConnectingModal: boolean
  showConnectRejectModal: boolean
  showSlippageToleranceSettingsModal: boolean
  showWalletModal: boolean
}

export const INIT_MODAL_STATE = {
  showAccountModal: false,
  showConnectingModal: false,
  showConnectRejectModal: false,
  showSlippageToleranceSettingsModal: false,
  showWalletModal: false,
}
