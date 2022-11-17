import { getScanLink } from '../../utils/getScanLink';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    chainId: import("vue").Ref<import("l0k_swap-sdk").ChainId | undefined>;
    isMobile: import("vue").Ref<boolean>;
    sortdTransactions: import("vue").ComputedRef<import("../../starknet/providers/transaction").Transaction[]>;
    getScanLink: typeof getScanLink;
    clearTransactions: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
