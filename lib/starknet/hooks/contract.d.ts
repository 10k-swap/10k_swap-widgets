import { Abi, Contract } from 'starknet';
import { ComputedRef } from 'vue';
export declare function useContract(abi: ComputedRef<Abi>, address: ComputedRef<string | undefined>): ComputedRef<Contract | undefined>;
