import { ProviderInterface } from 'starknet';
import { PropType } from 'vue';
import { TransactionRefreshData } from './transaction';
import { Connector } from '../connectors';
import { InjectedConnectorOptions } from '../connectors/injected';
declare const _sfc_main: import("vue").DefineComponent<{
    defaultProvider: PropType<ProviderInterface>;
    connectors: {
        type: PropType<Connector<InjectedConnectorOptions>[]>;
        required: true;
    };
}, {
    defaultProvider: import("vue").Ref<ProviderInterface | undefined>;
    connectors: import("vue").Ref<Connector<InjectedConnectorOptions>[]>;
    onTransactionRefresh: (data: TransactionRefreshData) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "transactionRefresh"[], "transactionRefresh", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultProvider: PropType<ProviderInterface>;
    connectors: {
        type: PropType<Connector<InjectedConnectorOptions>[]>;
        required: true;
    };
}>> & {
    onTransactionRefresh?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
