import { ComponentPublicInstance } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    position: {
        type: import("vue").PropType<import("./index").Position>;
        default: string;
        validator(val: import("./index").Position): boolean;
    };
    transition: {
        type: import("vue").PropType<import("./index").Transition>;
        default(props: {
            position: import("./index").Position;
        }): import("./index").Transition;
    };
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
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
    top: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, {
    root: import("vue").Ref<Node | undefined>;
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    elements: import("vue").Ref<Element[]>;
    showModal: import("vue").Ref<boolean>;
    shwoOverlay: import("vue").ComputedRef<boolean>;
    contentStyle: import("vue").ComputedRef<{
        marginTop: string;
    }>;
    containerClass: import("vue").ComputedRef<import("./index").Position[]>;
    showModalContent: import("vue").Ref<boolean>;
    onOverlayClick: () => void;
    onTransitionEnd: () => void;
    onDismiss: () => void;
    onRef: (element: ComponentPublicInstance | Element | null, i: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "show" | "hide")[], "update:modelValue" | "show" | "hide", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: import("vue").PropType<import("./index").Position>;
        default: string;
        validator(val: import("./index").Position): boolean;
    };
    transition: {
        type: import("vue").PropType<import("./index").Transition>;
        default(props: {
            position: import("./index").Position;
        }): import("./index").Transition;
    };
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
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
    top: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
}, {
    top: string | number;
    position: import("./index").Position;
    transition: import("./index").Transition;
    preventScroll: boolean;
    modelValue: boolean;
    hasOverlay: boolean;
    maskClosable: boolean;
    appendToBody: boolean;
}>;
export default _sfc_main;
