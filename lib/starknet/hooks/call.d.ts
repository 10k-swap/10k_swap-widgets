import { Contract, Result } from 'starknet';
import { ComputedRef } from 'vue';
import { BN } from '../../types';
interface State {
    data?: Result | undefined;
    loading: boolean;
    error?: string;
    lastUpdatedAt: string;
}
interface UseStarknetCallOptions {
    watch?: boolean;
}
export interface UseStarknetCall {
    refresh: () => void;
}
export declare function useStarknetCall<T extends unknown[]>(contract: ComputedRef<Contract | undefined>, method: string, args?: ComputedRef<T | undefined> | [], options?: UseStarknetCallOptions | undefined): UseStarknetCall & {
    state: State;
};
interface CallsState {
    data: Array<(BN[] & {
        [key: string]: BN;
    }) | undefined>;
    loading: boolean;
    error?: string;
    lastUpdatedAt: string;
}
export declare function useStarknetCalls<T extends unknown[]>(contracts: ComputedRef<Contract[] | undefined>, methods: ComputedRef<string[] | undefined>, argsList?: ComputedRef<T[] | undefined>, options?: UseStarknetCallOptions | undefined): UseStarknetCall & {
    states: CallsState;
};
export {};
