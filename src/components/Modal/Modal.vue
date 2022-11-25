<template>
  <div class="l0k-swap-modal-container" v-show="showModal">
    <transition name="l0k-swap-modal-overlay-fade">
      <div class="l0k-swap-modal-overlay" v-show="showOverlay" :ref="(element) => onRef(element, 0)" @click="onOverlayClick" />
    </transition>
    <Transition :name="'l0k-swap-slide-left'" @after-enter="onTransitionEnd" @after-leave="onTransitionEnd">
      <div class="l0k-swap-modal-content" v-show="showModalContent" :ref="(element) => onRef(element, 1)" :class="['l0k-swap-slide-left']">
        <slot name="header" v-if="slots.header" />
        <ModalHeader v-else :title="title" @dismiss="onDismiss" />
        <div class="l0k-swap-modal-wrap"><slot /></div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch, onMounted, ComponentPublicInstance, computed } from 'vue'
import ModalHeader from './ModalHeader.vue'
import Transition from '../Transition/Transition.vue'
import { props } from './index'
import { usePreventScrollEventHandler } from './hooks'

export default defineComponent({
  components: {
    ModalHeader,
    Transition,
  },
  props: {
    ...props,
  },
  emits: ['update:modelValue', 'show', 'hide'],
  setup(props, { emit, slots }) {
    const { modelValue, preventScroll, maskClosable, hasOverlay } = toRefs(props)

    const showModal = ref(false)
    const showModalContent = ref(false)
    const isAnimation = ref(false)
    const elements = ref<Element[]>([])

    const showOverlay = computed(() => hasOverlay.value && showModalContent.value)

    const preventScrollEvent = usePreventScrollEventHandler(elements, preventScroll)

    const onShowModal = () => {
      showModal.value = true
      isAnimation.value = true
      showModalContent.value = true

      preventScrollEvent('addEventListener')
    }
    const onDismiss = () => {
      isAnimation.value = true
      showModalContent.value = false

      emit('update:modelValue', false)

      preventScrollEvent('removeEventListener')
    }
    const onRef = (element: ComponentPublicInstance | Element | null, i: number) => {
      if (element instanceof Element) {
        elements.value[i] = element
      }
    }
    const onOverlayClick = () => {
      if (maskClosable.value) {
        onDismiss()
      }
    }
    const onTransitionEnd = () => {
      if (isAnimation.value) {
        return
      }

      if (showModalContent.value) {
        emit('show')
      } else {
        showModal.value = false
        emit('hide')
      }

      isAnimation.value = false
    }

    watch(modelValue, (newValue) => {
      if (!newValue) {
        onDismiss()
        return
      }

      if (!isAnimation.value) {
        onShowModal()
        return
      }

      setTimeout(() => onShowModal(), 50)
    })

    onMounted(() => {
      if (modelValue.value) {
        onShowModal()
      }
    })

    return {
      slots,
      elements,
      showModal,
      showOverlay,
      showModalContent,

      onOverlayClick,
      onTransitionEnd,
      onDismiss,
      onRef,
    }
  },
})
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
@import '../../styles/index.scss';

.l0k-swap-modal-container {
  @include absolute-pos();
  position: absolute;
  display: flex;
  pointer-events: none;
  z-index: 999;
  justify-content: flex-end;
  margin: 0.25em;
  .l0k-swap-modal-content {
    position: relative;
    pointer-events: auto;
    z-index: 2;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    border-radius: 20px;

    background: $color-bg-secondary;
    @include no-scrollbar;

    .l0k-swap-modal-wrap {
      padding: 0 20px 20px 20px;
      box-sizing: border-box;
    }
  }
}
.l0k-swap-modal-overlay {
  @include absolute-pos();
  position: absolute;
  pointer-events: auto;
  z-index: 1;
  background-color: $color-overlay;
}
.l0k-swap-modal-overlay-fade {
  &-enter-from,
  &-leave-to {
    opacity: 0.01;
  }
  &-enter-active,
  &-leave-active {
    transition: opacity 250ms;
  }
}
</style>
