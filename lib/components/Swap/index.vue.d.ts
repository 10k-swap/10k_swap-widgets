import { Token, Trade, TokenAmount } from 'l0k_swap-sdk';
import { shortenAddress } from '../../utils';
import { Field } from '../../providers/SwapStateProvider/model';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    swapState: {
        showConfirm: boolean;
        attemptingTxn: boolean;
        swapErrorMessage: string | undefined;
        txHash: string | undefined;
    };
    Field: typeof Field;
    isValid: import("vue").ComputedRef<boolean>;
    v2Trade: import("vue").ComputedRef<Trade | null | undefined>;
    summary: import("vue").ComputedRef<string | undefined>;
    account: import("vue").Ref<string | undefined>;
    noRoute: import("vue").ComputedRef<boolean>;
    noTrade: import("vue").ComputedRef<boolean>;
    loadingTrade: import("vue").ComputedRef<boolean>;
    formattedAmounts: import("vue").ComputedRef<{
        [x: string]: string | number;
    }>;
    currencies: import("vue").ComputedRef<{
        INPUT?: Token | undefined;
        OUTPUT?: Token | undefined;
    }>;
    currencyBalances: import("vue").ComputedRef<{
        INPUT: TokenAmount | null | undefined;
        OUTPUT: TokenAmount | null | undefined;
    }>;
    userHasSpecifiedInputOutput: import("vue").ComputedRef<boolean>;
    swapInputError: import("vue").Ref<string | undefined>;
    swapCallbackError: import("vue").ComputedRef<string | null>;
    showRejectedModal: import("vue").ComputedRef<boolean>;
    tradeToConfirm: import("vue").Ref<Trade | undefined>;
    onSetting: () => void;
    onInputSelect: (inputCurrency: Token) => void;
    openWalletModal: () => void;
    onSwitch: () => void;
    onOutputSelect: (inputCurrency: Token) => void;
    onSwapClick: () => void;
    onReset: () => void;
    onMax: (maxInputAmount: TokenAmount | undefined) => void;
    handleTypeInput: (value: string | number) => void;
    handleTypeOutput: (value: string | number) => void;
    handleSwap: () => void;
    shortenAddress: typeof shortenAddress;
    showAccount: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
