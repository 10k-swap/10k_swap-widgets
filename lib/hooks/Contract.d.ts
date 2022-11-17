import { ComputedRef } from 'vue';
export declare function useTokenContract(address: ComputedRef<string | undefined>): ComputedRef<import("starknet").Contract | undefined>;
