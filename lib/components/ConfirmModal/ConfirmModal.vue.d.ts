import { PropType } from 'vue';
import { Trade } from 'l0k_swap-sdk';
declare const _sfc_main: import("vue").DefineComponent<{
    show: {
        default: boolean;
        type: BooleanConstructor;
    };
    trade: {
        type: PropType<Trade>;
    };
}, {
    showModal: import("vue").WritableComputedRef<boolean>;
    trade: import("vue").Ref<Trade | undefined>;
    onConfirm: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("dismiss" | "swap")[], "dismiss" | "swap", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        default: boolean;
        type: BooleanConstructor;
    };
    trade: {
        type: PropType<Trade>;
    };
}>> & {
    onDismiss?: ((...args: any[]) => any) | undefined;
    onSwap?: ((...args: any[]) => any) | undefined;
}, {
    show: boolean;
}>;
export default _sfc_main;
