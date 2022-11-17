import { PropType } from 'vue';
import { Token, TokenAmount } from 'l0k_swap-sdk';
declare const _sfc_main: import("vue").DefineComponent<{
    selectorDisabled: BooleanConstructor;
    token: {
        type: PropType<Token | null | undefined>;
    };
    otherToken: {
        type: PropType<Token | null | undefined>;
    };
    currencyBalance: {
        type: PropType<TokenAmount | null | undefined>;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    selector: {
        default: boolean;
        type: BooleanConstructor;
    };
    size: {
        default: string;
        type: PropType<"normal" | "small">;
    };
    onMax: {
        type: PropType<(amount: TokenAmount | undefined) => void>;
    };
}, {
    onSelect: (token: Token) => void;
    onInput: (e: InputEvent) => void;
    isNull: (value: any) => value is null;
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    typedValue: import("vue").WritableComputedRef<string | number | undefined>;
    classes: import("vue").ComputedRef<{
        'l0k-swap-currency-input-panel-small': boolean;
    }>;
    currencyBalance: import("vue").Ref<TokenAmount | null | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "token-select")[], "input" | "token-select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    selectorDisabled: BooleanConstructor;
    token: {
        type: PropType<Token | null | undefined>;
    };
    otherToken: {
        type: PropType<Token | null | undefined>;
    };
    currencyBalance: {
        type: PropType<TokenAmount | null | undefined>;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    selector: {
        default: boolean;
        type: BooleanConstructor;
    };
    size: {
        default: string;
        type: PropType<"normal" | "small">;
    };
    onMax: {
        type: PropType<(amount: TokenAmount | undefined) => void>;
    };
}>> & {
    onInput?: ((...args: any[]) => any) | undefined;
    "onToken-select"?: ((...args: any[]) => any) | undefined;
}, {
    size: "normal" | "small";
    selectorDisabled: boolean;
    selector: boolean;
}>;
export default _sfc_main;