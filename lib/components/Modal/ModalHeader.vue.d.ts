declare const _sfc_main: import("vue").DefineComponent<{
    title: StringConstructor;
}, {
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    title: import("vue").Ref<string | undefined>;
    onClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "dismiss"[], "dismiss", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
}>> & {
    onDismiss?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
