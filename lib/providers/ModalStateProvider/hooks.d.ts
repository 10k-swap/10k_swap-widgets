import { ToRefs } from 'vue';
import { ModalState, ModalType } from './model';
export declare function useModalStateManager(): [ToRefs<ModalState>, (modal: ModalType, value: boolean) => void];
export declare function useOpenWalletModal(): () => void;
