declare const _sfc_main: import("vue").DefineComponent<{
    show: {
        default: boolean;
        type: BooleanConstructor;
    };
    tx: {
        type: StringConstructor;
    };
}, {
    showModal: import("vue").WritableComputedRef<boolean>;
    scanLink: import("vue").ComputedRef<string | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "dismiss"[], "dismiss", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        default: boolean;
        type: BooleanConstructor;
    };
    tx: {
        type: StringConstructor;
    };
}>> & {
    onDismiss?: ((...args: any[]) => any) | undefined;
}, {
    show: boolean;
}>;
export default _sfc_main;
