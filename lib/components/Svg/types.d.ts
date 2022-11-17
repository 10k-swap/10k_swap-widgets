import { CSSProperties, PropType } from 'vue';
export declare type SvgColor = 'normal' | 'primary' | 'white' | 'secondary' | 'danger' | 'minor' | 'light' | 'none';
export declare const SvgProps: {
    color: {
        type: PropType<SvgColor>;
        default: string;
    };
    style: {
        type: PropType<CSSProperties>;
        default: () => null;
    };
    width: {
        type: StringConstructor;
        default: undefined;
    };
};
