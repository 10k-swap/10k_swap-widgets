import { PropType } from 'vue';
import { ProviderInterface } from 'starknet';
import { Connector } from '../../connectors';
import { InjectedConnectorOptions } from '../../connectors/injected';
export declare const StarknetLibraryProvider: import("vue").DefineComponent<{
    defaultProvider: PropType<ProviderInterface | undefined>;
    connectors: {
        type: PropType<Connector<InjectedConnectorOptions>[]>;
        required: true;
    };
}, import("vue").Slot | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultProvider: PropType<ProviderInterface | undefined>;
    connectors: {
        type: PropType<Connector<InjectedConnectorOptions>[]>;
        required: true;
    };
}>>, {}>;
