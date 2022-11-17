import { ToRefs } from 'vue';
import { Transaction, StarknetTransactionManager } from './model';
export declare function useStarknetTransactionManager(): StarknetTransactionManager & {
    state: ToRefs<{
        transactions: Transaction[];
    }>;
};
