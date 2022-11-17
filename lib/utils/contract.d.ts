import { ChainId } from 'l0k_swap-sdk';
import { AccountInterface, ProviderInterface, Contract } from 'starknet';
export declare function getRouterContract(chainId: ChainId, library: ProviderInterface | AccountInterface): Contract;
