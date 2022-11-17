import { PropType } from 'vue';
import { Price } from 'l0k_swap-sdk';
declare const _sfc_main: import("vue").DefineComponent<{
    price: {
        type: PropType<Price>;
    };
}, {
    label: import("vue").ComputedRef<string>;
    show: import("vue").ComputedRef<boolean>;
    setShowInverted: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    price: {
        type: PropType<Price>;
    };
}>>, {}>;
export default _sfc_main;
