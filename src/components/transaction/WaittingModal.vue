<template>
  <Modal v-model="showModal">
    <template v-slot:header>
      <ModalHeader @dismiss="() => (showModal = false)" />
    </template>
    <div class="l0k-swap-transaction-waitting-modal">
      <WaittingIcon width="64px" />
      <Text class="label" bold> Waiting For Confirmation... </Text>
      <Text class="desc" :size="'small'" :color="'secondary-text'">
        {{ desc }}
      </Text>
      <Text :size="'small'" :color="'secondary-text'"> Confirm this transaction in your wallet </Text>
    </div>
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import Modal from '../Modal/Modal.vue'
import ModalHeader from '../Modal/ModalHeader.vue'
import { WaittingIcon } from '../Svg/index'
import Text from '../Text/Text.vue'

export default defineComponent({
  props: {
    show: {
      default: false,
      type: Boolean,
    },
    desc: {
      type: String,
      default: '',
    },
  },
  components: {
    Modal,
    ModalHeader,
    Text,
    WaittingIcon,
  },
  emits: ['dismiss'],
  setup(props, { emit }) {
    const { show } = toRefs(props)

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
    }
  },
})
</script>

<style lang="scss">
@import '../../styles/index.scss';

.l0k-swap-transaction-waitting-modal {
  display: flex;
  flex-direction: column;
  align-items: center;

  .label {
    margin-top: 16px;
  }
  .desc {
    margin-top: 40px;
    margin-bottom: 5px;
  }
}
</style>
