import { Provider } from 'starknet'

export const StarknetStateSymbol = Symbol('StarknetState')

export const StarknetAtiveConnector = Symbol('StarknetAtiveConnector')

export const StarknetMethodsSymbol = Symbol('StarknetMethods')

export const defaultProvider = new Provider({ network: 'goerli-alpha' })
