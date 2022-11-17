declare const _sfc_main: import("vue").DefineComponent<{
    show: {
        default: boolean;
        type: BooleanConstructor;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
}, {
    showModal: import("vue").WritableComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "dismiss"[], "dismiss", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        default: boolean;
        type: BooleanConstructor;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onDismiss?: ((...args: any[]) => any) | undefined;
}, {
    show: boolean;
    desc: string;
}>;
export default _sfc_main;
