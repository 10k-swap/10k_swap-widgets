import { onMounted, onUnmounted, reactive, Ref, toRaw } from 'vue'
import { Provider, AccountInterface, ProviderInterface } from 'starknet'
import { StarknetMethods, StarknetState } from './model'
import { Connector, InjectedConnector } from '../../connectors'
import { ConnectorNotFoundError, UserRejectedRequestError, ConnectorNotConnectedError } from '../../errors'
import ConnectorStorageManager from '../../utils/ConnectorStorageManager'
import { ChainId, isEqualAddress } from 'l0k_swap-sdk'
import { defaultProvider } from './const'
import { InjectedConnectorOptions } from '../../connectors/injected'

export function useStarknetManager(
  userDefaultProvider: Ref<ProviderInterface | undefined>,
  connectors: Ref<Connector<InjectedConnectorOptions>[]>
): StarknetMethods & { state: StarknetState } {
  const connectorId = ConnectorStorageManager.get()

  const state = reactive<{
    library: ProviderInterface | AccountInterface | Provider
    connectors: Connector<InjectedConnectorOptions>[]
    connector: Connector | undefined
    account: string | undefined
    chainId: ChainId | undefined
    error: Error | undefined
  }>({
    library: userDefaultProvider.value ? userDefaultProvider.value : defaultProvider,
    connectors: connectors.value,
    connector: connectorId ? new InjectedConnector({ id: connectorId }) : undefined,
    account: undefined,
    error: undefined,
    chainId: (userDefaultProvider.value ? userDefaultProvider.value : defaultProvider).chainId,
  })

  const _getConnectorInfo = async () => {
    if (!state.connector) {
      return
    }
    const connector = toRaw(state.connector)
    const account = await connector.connect()
    if ((state.account && !isEqualAddress(account.address, state.account)) || state.chainId !== account.chainId) {
      state.account = account.address
      state.library = account
      state.chainId = account.chainId
    }
  }
  const _watch = (connector: Connector) => {
    connector.on('accountsChanged', _getConnectorInfo)
    connector.on('networkChanged', _getConnectorInfo)
  }

  const connect = async (connector: Connector) => {
    _watch(connector)

    if (state.account) {
      return
    }
    try {
      const account = await connector.connect()
      state.connector = connector
      state.account = account.address
      state.library = account
      state.chainId = account.chainId
      ConnectorStorageManager.set(connector.id())
    } catch (error) {
      if (error instanceof UserRejectedRequestError) {
        state.error = error
        throw error
      }
      if (error instanceof ConnectorNotConnectedError) {
        state.error = error
        throw error
      }
      state.error = error instanceof Error ? error : new Error(error as any)
    }
  }

  const disconnect = () => {
    if (!state.connector) {
      return
    }
    state.connector.disconnect().then(
      () => {
        ConnectorStorageManager.set(null)
        state.account = undefined
        state.library = userDefaultProvider.value ? userDefaultProvider.value : defaultProvider
        state.chainId = state.library.chainId
      },
      (err) => {
        console.error(err)
        state.error = new ConnectorNotFoundError()
      }
    )
  }

  onUnmounted(() => {
    const connector = toRaw(state.connector)
    if (connector) {
      connector.off('accountsChanged', _getConnectorInfo)
      connector.off('networkChanged', _getConnectorInfo)
    }
  })

  onMounted(() => {
    if (connectorId) {
      connect(new InjectedConnector({ id: connectorId }))
    }
  })

  return {
    connect,
    disconnect,
    state,
  }
}
