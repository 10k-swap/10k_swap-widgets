import { PropType } from 'vue';
import { Token } from 'l0k_swap-sdk';
declare const _sfc_main: import("vue").DefineComponent<{
    token: {
        type: PropType<Token | null>;
    };
    otherToken: {
        type: PropType<Token | null>;
    };
}, {
    current: import("vue").WritableComputedRef<Token | null | undefined>;
    tokens: import("vue").ComputedRef<Token[]>;
    show: import("vue").Ref<boolean>;
    onSelect: (selected: Token, e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    token: {
        type: PropType<Token | null>;
    };
    otherToken: {
        type: PropType<Token | null>;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
