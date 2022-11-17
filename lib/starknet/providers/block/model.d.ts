import { GetBlockResponse } from 'starknet';
export interface BlockState {
    block: GetBlockResponse | undefined;
    loading: boolean | undefined;
    error: string | undefined;
}
export declare const INIT_BLOCK_STATE: BlockState;
