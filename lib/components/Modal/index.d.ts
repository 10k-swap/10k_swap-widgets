import { PropType } from 'vue';
export declare type Position = 'bottom' | 'top' | 'left' | 'right' | 'center';
export declare type Transition = 'l0k-swap-slide-up' | 'l0k-swap-slide-down' | 'l0k-swap-slide-right' | 'l0k-swap-slide-left' | 'l0k-swap-zoom' | 'l0k-swap-fade' | 'l0k-swap-bounce';
export declare const props: {
    position: {
        type: PropType<Position>;
        default: string;
        validator(val: Position): boolean;
    };
    transition: {
        type: PropType<Transition>;
        default(props: {
            position: Position;
        }): Transition;
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
};
