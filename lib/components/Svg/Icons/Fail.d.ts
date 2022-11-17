declare const _default: import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<import("../types").SvgColor>;
        default: string;
    };
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => null;
    };
    width: {
        type: StringConstructor;
        default: undefined;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<import("../types").SvgColor>;
        default: string;
    };
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => null;
    };
    width: {
        type: StringConstructor;
        default: undefined;
    };
}>>, {
    color: import("../types").SvgColor;
    style: import("vue").CSSProperties;
    width: string;
}>;
export default _default;
