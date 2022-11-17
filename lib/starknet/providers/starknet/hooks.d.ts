import { ToRefs } from 'vue';
import { StarknetState, StarknetMethods } from './model';
export declare function useStarknet(): StarknetMethods & {
    state: ToRefs<StarknetState>;
};
