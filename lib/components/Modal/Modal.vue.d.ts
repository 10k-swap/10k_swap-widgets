import { ComponentPublicInstance } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    preventScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
}, {
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    elements: import("vue").Ref<Element[]>;
    showModal: import("vue").Ref<boolean>;
    shwoOverlay: import("vue").ComputedRef<boolean>;
    showModalContent: import("vue").Ref<boolean>;
    onOverlayClick: () => void;
    onTransitionEnd: () => void;
    onDismiss: () => void;
    onRef: (element: ComponentPublicInstance | Element | null, i: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "show" | "hide")[], "update:modelValue" | "show" | "hide", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    preventScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
}, {
    preventScroll: boolean;
    modelValue: boolean;
    hasOverlay: boolean;
    maskClosable: boolean;
}>;
export default _sfc_main;
