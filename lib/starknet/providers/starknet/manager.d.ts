import { Ref } from 'vue';
import { ProviderInterface } from 'starknet';
import { StarknetMethods, StarknetState } from './model';
import { Connector } from '../../connectors';
import { InjectedConnectorOptions } from '../../connectors/injected';
export declare function useStarknetManager(userDefaultProvider: Ref<ProviderInterface | undefined>, connectors: Ref<Connector<InjectedConnectorOptions>[]>): StarknetMethods & {
    state: StarknetState;
};
