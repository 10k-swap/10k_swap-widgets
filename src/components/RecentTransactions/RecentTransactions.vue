<template>
  <div class="l0k-swap-recent-transactions-wrap">
    <template v-if="sortdTransactions.length">
      <div class="l0k-swap-recent-transactions-head">
        <Text> Recent Transactions </Text>
        <div class="clear" @click="clearTransactions">
          <ClearIcon width="15px" />
          <Text> Clear All </Text>
        </div>
      </div>
      <div class="l0k-swap-recent-transactions">
        <div class="l0k-swap-recent-transaction" v-for="transaction in sortdTransactions" :key="transaction.transactionHash">
          <div class="svgs">
            <ScuccessIcon v-if="transaction.scuccess" :color="'primary'" width="16px" />
            <LoadingIcon v-else-if="transaction.loading" :color="'minor'" width="16px" />
            <FailIcon v-else-if="transaction.fail" color="danger" width="16px" />
          </div>
          <a target="_blank" :href="chainId && getScanLink(chainId, transaction.transactionHash, 'transaction')">
            <Text class="text" :color="'secondary-text'" :size="isMobile ? 'mini' : 'small'">
              {{ transaction.metadata?.message }}
            </Text>
            <ShareIcon class="share" :color="'light'" width="12px" />
          </a>
        </div>
      </div>
    </template>
    <template v-else>
      <Text :color="'secondary-text'" :size="'small'"> your transaction will appear here... </Text>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Text from '../Text/Text.vue'
import { ClearIcon, ScuccessIcon, LoadingIcon, FailIcon, ShareIcon } from '../Svg'
import { useStarknetTransactionManager } from '../../starknet/providers/transaction'
import { getScanLink } from '../../utils/getScanLink'
import { useStarknet } from '../../starknet/providers/starknet'
import useIsMobile from '../../hooks/useIsMobile'
import { cloneDeep } from 'lodash'

export default defineComponent({
  components: {
    Text,
    ClearIcon,
    ScuccessIcon,
    FailIcon,
    LoadingIcon,
    ShareIcon,
  },
  setup() {
    const {
      state: { chainId },
    } = useStarknet()
    const { state, clearTransactions } = useStarknetTransactionManager()
    const isMobile = useIsMobile()
    const sortdTransactions = computed(() => cloneDeep(state.transactions.value).sort((a, b) => b.createAt - a.createAt))

    return {
      chainId,
      isMobile,
      sortdTransactions,

      getScanLink,
      clearTransactions,
    }
  },
})
</script>

<style lang="scss">
@import '../../styles/index.scss';
.l0k-swap-recent-transactions-wrap {
  margin-top: 10px;

  .l0k-swap-recent-transactions-head {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;

    .clear {
      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        margin-right: 6px;
      }
    }
  }

  .l0k-swap-recent-transactions {
    max-height: 220px;
    overflow-y: auto;
    padding-top: 10px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      height: 80px;
      width: 4px;
    }
    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: $color-bg-light;
      border-radius: 4px;
    }
    .l0k-swap-recent-transaction {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      .svgs {
        display: flex;
        overflow: hidden;
      }
      .share {
        margin-left: 8px;
      }
      a {
        margin-left: 8px;
        display: flex;
        align-items: center;
        text-decoration: none;
      }
    }
  }
}
</style>
