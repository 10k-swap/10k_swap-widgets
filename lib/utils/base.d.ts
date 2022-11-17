import { BN } from '../types';
import { Token, TokenAmount } from 'l0k_swap-sdk';
export declare function isAddress(address: any): string | false;
export declare function shortenAddress(address: string, chars?: number): string;
export declare function isEqualsAddress(addressA: string, addressB: string): boolean;
export declare function parseBN2String(value: BN | undefined): string;
export declare function isEther(token: Token): boolean;
export declare function getDeductGasMaxAmount(amount: TokenAmount | undefined): TokenAmount | undefined;
