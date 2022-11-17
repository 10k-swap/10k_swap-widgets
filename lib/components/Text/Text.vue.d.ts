import { PropType } from 'vue';
import { TextColor, TextSize } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
    bold: BooleanConstructor;
    size: {
        type: PropType<TextSize>;
        default: string;
    };
    color: {
        type: PropType<TextColor>;
        default: string;
    };
}, {
    classes: import("vue").ComputedRef<import("../../utils/create/bem").Mods[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    bold: BooleanConstructor;
    size: {
        type: PropType<TextSize>;
        default: string;
    };
    color: {
        type: PropType<TextColor>;
        default: string;
    };
}>>, {
    color: TextColor;
    bold: boolean;
    size: TextSize;
}>;
export default _sfc_main;
