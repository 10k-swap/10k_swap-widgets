import { inject, toRefs, ToRefs } from 'vue'
import { noop } from '../../starknet/utils'
import { ModalStateSymbol, ModalMethodsSymbol } from './const'
import { INIT_MODAL_STATE, ModalState, ModalType } from './model'

export function useModalStateManager(): [ToRefs<ModalState>, (modal: ModalType, value: boolean) => void] {
  const state = inject<ToRefs<ModalState>>(ModalStateSymbol)
  const methods = inject<{ toggleModal: (modal: ModalType, value: boolean) => void }>(ModalMethodsSymbol) ?? {
    toggleModal: noop,
  }

  return [state ?? toRefs(INIT_MODAL_STATE), methods.toggleModal]
}

export function useOpenWalletModal() {
  const [, toggleModal] = useModalStateManager()

  return () => toggleModal('wallet', true)
}
