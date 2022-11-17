export declare type ModalType = 'account' | 'connecting' | 'connectReject' | 'slippageToleranceSettings' | 'wallet';
export interface ModalState {
    showAccountModal: boolean;
    showConnectingModal: boolean;
    showConnectRejectModal: boolean;
    showSlippageToleranceSettingsModal: boolean;
    showWalletModal: boolean;
}
export declare const INIT_MODAL_STATE: {
    showAccountModal: boolean;
    showConnectingModal: boolean;
    showConnectRejectModal: boolean;
    showSlippageToleranceSettingsModal: boolean;
    showWalletModal: boolean;
};
