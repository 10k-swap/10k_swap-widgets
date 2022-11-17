import { Token, ChainId } from 'l0k_swap-sdk';
declare type ChainTokenList = {
    readonly [chainId in ChainId]: Token[];
};
export declare const ethers: {
    [chainId in ChainId]: Token;
};
declare const tokens: ChainTokenList;
export declare const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList;
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export declare const CUSTOM_BASES: {
    [chainId in ChainId]?: {
        [tokenAddress: string]: Token[];
    };
};
export default tokens;
