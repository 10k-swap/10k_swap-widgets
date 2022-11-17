import { ChainId } from 'l0k_swap-sdk';
import { ProviderInterface, AccountInterface } from 'starknet';
import { Connector } from '../../connectors';
import { InjectedConnectorOptions } from '../../connectors/injected';
export interface StarknetState {
    account: string | undefined;
    library: ProviderInterface | AccountInterface;
    connectors: Connector<InjectedConnectorOptions>[];
    connector: Connector | undefined;
    chainId: ChainId | undefined;
    error: Error | undefined;
}
export interface StarknetMethods {
    connect: (connector: Connector<InjectedConnectorOptions>) => Promise<void>;
    disconnect: () => void;
}
export declare const STARKNET_INITIAL_STATE: StarknetState;
