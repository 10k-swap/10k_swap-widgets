import { nextTick, ref, watch } from 'vue'
import { useModalStateManager } from '../providers/ModalStateProvider/hooks'
import { Connector } from '../starknet/connectors'
import { InjectedConnectorOptions } from '../starknet/connectors/injected'
import { UserRejectedRequestError } from '../starknet/errors'
import { useStarknet } from '../starknet/providers/starknet'
import useArgentXRejectCallback from './useArgentXRejectCallback'

export default function useConnector(): {
  onConnect: (connector: Connector<InjectedConnectorOptions>) => Promise<void>
} {
  const connectError = ref<Error>()

  const [{ showConnectingModal }, toggleModal] = useModalStateManager()

  const {
    state: { account },
    connect,
  } = useStarknet()

  watch(connectError, (newErr) => {
    if (!newErr) {
      return
    }

    if (showConnectingModal.value) {
      toggleModal('connecting', false)
    }

    if (newErr instanceof UserRejectedRequestError) {
      toggleModal('connectReject', true)
    }
  })

  useArgentXRejectCallback(() => {
    if (account.value) {
      return
    }
    if (showConnectingModal.value) {
      toggleModal('connecting', false)
    }
    if (connectError.value) {
      return
    }
    nextTick(() => {
      connectError.value = new UserRejectedRequestError()
    })
  })

  const onConnect = async (connector: Connector<InjectedConnectorOptions>) => {
    connectError.value = undefined

    try {
      const ready = await connector.ready()

      if (!ready) {
        toggleModal('connecting', true)
      }

      await connect(connector)

      nextTick(() => {
        toggleModal('connecting', false)
        if (account.value) {
          toggleModal('account', true)
        }
      })
    } catch (error) {
      console.log('connect error', error)
      connectError.value = error as Error
    }
  }

  return {
    onConnect,
  }
}
