import { Connector } from '../starknet/connectors';
import { InjectedConnectorOptions } from '../starknet/connectors/injected';
export default function useConnector(): {
    onConnect: (connector: Connector<InjectedConnectorOptions>) => Promise<void>;
};
