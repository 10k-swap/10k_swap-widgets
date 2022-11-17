import { PropType } from 'vue';
import { SvgColor } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
    fill: StringConstructor;
    viewBox: {
        type: PropType<string>;
        default: string;
    };
    color: {
        type: PropType<SvgColor>;
        default: string;
    };
    style: {
        type: PropType<import("vue").CSSProperties>;
        default: () => null;
    };
    width: {
        type: StringConstructor;
        default: undefined;
    };
}, {
    classes: import("vue").ComputedRef<import("../../utils/create/bem").Mods[]>;
    style: import("vue").Ref<import("vue").CSSProperties>;
    viewBox: import("vue").Ref<string>;
    width: import("vue").Ref<string | undefined>;
    fill: import("vue").Ref<string | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fill: StringConstructor;
    viewBox: {
        type: PropType<string>;
        default: string;
    };
    color: {
        type: PropType<SvgColor>;
        default: string;
    };
    style: {
        type: PropType<import("vue").CSSProperties>;
        default: () => null;
    };
    width: {
        type: StringConstructor;
        default: undefined;
    };
}>>, {
    viewBox: string;
    color: SvgColor;
    style: import("vue").CSSProperties;
    width: string;
}>;
export default _sfc_main;
