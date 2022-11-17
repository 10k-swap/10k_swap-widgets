import { ChainId } from 'l0k_swap-sdk';
import { Transaction } from '../providers/transaction/model';
export default class TransactionStorageManager {
    static readonly _name = "transactions";
    static get(): {
        [chainId in ChainId]: {
            [account: string]: Transaction[];
        };
    } | null;
    static set(transactions: Transaction[], account: string, chainId: ChainId): void;
    static at(account: string | undefined, chainId: ChainId | undefined): Transaction[];
}
