import { PropType } from 'vue';
import { ButtonSize, ButtonType } from './types';
declare const _default: import("vue").DefineComponent<{
    text: StringConstructor;
    color: StringConstructor;
    block: BooleanConstructor;
    plain: BooleanConstructor;
    loading: BooleanConstructor;
    bold: BooleanConstructor;
    disabled: BooleanConstructor;
    loadingSize: StringConstructor;
    loadingText: StringConstructor;
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    nativeType: {
        type: PropType<"button" | "submit" | "reset" | undefined>;
        default: string;
    };
    iconPosition: {
        type: PropType<"left" | "right">;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: StringConstructor;
    color: StringConstructor;
    block: BooleanConstructor;
    plain: BooleanConstructor;
    loading: BooleanConstructor;
    bold: BooleanConstructor;
    disabled: BooleanConstructor;
    loadingSize: StringConstructor;
    loadingText: StringConstructor;
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    nativeType: {
        type: PropType<"button" | "submit" | "reset" | undefined>;
        default: string;
    };
    iconPosition: {
        type: PropType<"left" | "right">;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    type: ButtonType;
    bold: boolean;
    size: ButtonSize;
    block: boolean;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    tag: keyof HTMLElementTagNameMap;
    nativeType: "button" | "submit" | "reset" | undefined;
    iconPosition: "left" | "right";
}>;
export default _default;
