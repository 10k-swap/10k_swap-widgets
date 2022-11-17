import { PropType } from 'vue';
import { Token } from 'l0k_swap-sdk';
declare const _default: import("vue").DefineComponent<{
    alt: StringConstructor;
    token: {
        type: PropType<Token | null | undefined>;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    alt: StringConstructor;
    token: {
        type: PropType<Token | null | undefined>;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    size: number;
}>;
export default _default;
