import { PropType } from 'vue';
import { Trade } from 'l0k_swap-sdk';
import { Field } from '../../providers/SwapStateProvider/model';
declare const _sfc_main: import("vue").DefineComponent<{
    trade: {
        type: PropType<Trade>;
    };
}, {
    trade: import("vue").Ref<Trade | undefined>;
    showRoute: import("vue").ComputedRef<boolean>;
    isExactIn: import("vue").ComputedRef<boolean>;
    allowedSlippage: import("vue").Ref<number>;
    slippageAdjustedAmounts: import("vue").ComputedRef<{
        INPUT?: import("l0k_swap-sdk").TokenAmount | undefined;
        OUTPUT?: import("l0k_swap-sdk").TokenAmount | undefined;
    }>;
    Field: typeof Field;
    ONE_BIPS: import("l0k_swap-sdk").Percent;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    trade: {
        type: PropType<Trade>;
    };
}>>, {}>;
export default _sfc_main;
