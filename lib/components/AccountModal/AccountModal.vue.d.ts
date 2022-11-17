import { shortenAddress } from '../../utils';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    showModal: import("vue").WritableComputedRef<boolean>;
    wallet: import("vue").Ref<string | null>;
    account: import("vue").Ref<string | undefined>;
    isMobile: import("vue").Ref<boolean>;
    copySuccess: import("vue").Ref<boolean>;
    shortenAddress: typeof shortenAddress;
    onDisconnect: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
