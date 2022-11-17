import { WalletProvider } from './types';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    showModal: import("vue").WritableComputedRef<boolean>;
    discovery: ({
        id: string;
        name: string;
        icon: string;
        downloads: {
            chrome: string;
            firefox: string;
            edge: string;
        };
    } | {
        id: string;
        name: string;
        icon: string;
        downloads: {
            chrome: string;
            firefox: string;
            edge?: undefined;
        };
    })[];
    isInstalled: (id: string) => boolean;
    onWalletSelect: (wallet: WalletProvider) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
