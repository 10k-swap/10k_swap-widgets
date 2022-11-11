<template>
  <Modal v-model="showModal">
    <template v-slot:header>
      <ModalHeader @dismiss="() => (showModal = false)" />
    </template>
    <div class="l0k-swap-transaction-scuccess-modal">
      <ScuccessIcon width="64px" :color="'primary'" />
      <Text class="label" bold> Transaction Submitted </Text>
      <a class="link" :href="scanLink" target="_blank">
        <Text :color="'secondary-text'" :size="'small'"> View on STARKSCAN </Text>
      </a>
      <Button class="close" @click="showModal = false" plain bold> Close </Button>
    </div>
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import Modal from '../Modal/Modal.vue'
import ModalHeader from '../Modal/ModalHeader.vue'
import { ScuccessIcon } from '../Svg/index'
import Text from '../Text/Text.vue'
import Button from '../Button/Button'
import { useStarknet } from '../../starknet/providers/starknet'
import { getScanLink } from '../../utils/getScanLink'

export default defineComponent({
  props: {
    show: {
      default: false,
      type: Boolean,
    },
    tx: {
      type: String,
    },
  },
  components: {
    Modal,
    ModalHeader,
    Text,
    ScuccessIcon,
    Button,
  },
  emits: ['dismiss'],
  setup(props, { emit }) {
    const { show, tx } = toRefs(props)
    const {
      state: { chainId },
    } = useStarknet()

    const scanLink = computed(() => {
      if (!tx.value || !chainId.value) {
        return undefined
      }
      return getScanLink(chainId.value, tx.value, 'transaction')
    })

    const showModal = computed({
      get: () => show.value,
      set(newValue) {
        if (!newValue) {
          emit('dismiss')
        }
      },
    })

    return {
      showModal,
      scanLink,
    }
  },
})
</script>

<style lang="scss">
@import '../../styles/index.scss';

.l0k-swap-transaction-scuccess-modal {
  display: flex;
  flex-direction: column;
  align-items: center;

  .label {
    margin-top: 16px;
    margin-bottom: 4px;
  }

  .link {
    margin-bottom: 20px;
    text-decoration-color: $color-secondary-text;
  }

  .close {
    width: 140px;
  }
}
</style>
