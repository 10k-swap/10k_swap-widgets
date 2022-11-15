<template>
  <div
    v-show="isPopupShow"
    class="m-popup l0k-swap-modal-container"
    :class="[hasMask ? 'with-mask' : '', largeRadius ? 'large-radius' : '', position]"
  >
    <transition name="m-mask-fade">
      <div v-show="hasMask && isPopupBoxShow" @click="handelPopupMaskClick" class="m-popup-mask l0k-swap-modal-overlay"></div>
    </transition>
    <m-transition
      :name="transition"
      @before-enter="handelPopupTransitionStart"
      @before-leave="handelPopupTransitionStart"
      @after-enter="handelPopupTransitionEnd"
      @after-leave="handelPopupTransitionEnd"
    >
      <div
        v-show="isPopupBoxShow"
        class="m-popup-box l0k-swap-modal-content"
        :class="[transition]"
        :style="{ marginTop: isNumber(top) ? `${top}px` : top }"
      >
        <slot name="header" v-if="slots.header"></slot>
        <ModalHeader v-else :title="title" @dismiss="hidePopupBox" />
        <div class="l0k-swap-modal-wrap"><slot></slot></div>
      </div>
    </m-transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch, getCurrentInstance, onMounted } from 'vue'
import Transition from '../transition/transition.vue'
import ModalHeader from './ModalHeader.vue'
import { props, Props } from './index'
import { isNumber } from 'lodash'

export default defineComponent({
  name: 'm-popup',
  components: { ModalHeader, 'm-transition': Transition },
  props: {
    ...props,
  },
  emits: ['update:modelValue', 'before-hide', 'before-show', 'show', 'hide', 'mask-click'],
  setup(props: Props, { emit, slots }) {
    const { modelValue, preventScroll, maskClosable, position, transition, hasMask, appendToBody } = toRefs(props)

    const isPopupShow = ref(false)
    const isPopupBoxShow = ref(false)
    const isAnimation = ref(false)
    const largeRadius = ref(false)

    const instanc = getCurrentInstance()

    onMounted(() => {
      if (modelValue.value) {
        showPopupBox()
      }
    })

    watch(modelValue, (val) => {
      if (val) {
        if (isAnimation.value) {
          setTimeout(() => {
            showPopupBox()
          }, 50)
        } else {
          showPopupBox()
        }
      } else {
        hidePopupBox()
      }
    })

    const showPopupBox = () => {
      if (appendToBody.value) {
        const el = instanc?.proxy?.$el
        document.body.appendChild(el)
      }
      isPopupShow.value = true
      isAnimation.value = true
      isPopupBoxShow.value = true
      // eslint-disable-next-line no-undef
      if (process.env.MAND_ENV === 'test') {
        handelPopupTransitionStart()
        handelPopupTransitionEnd()
      }
      preventScroll.value && preventScrollEvent(true)
    }

    const hidePopupBox = () => {
      isAnimation.value = true
      isPopupBoxShow.value = false
      preventScroll.value && preventScrollEvent(false)
      emit('update:modelValue', false)
      // eslint-disable-next-line no-undef
      if (process.env.MAND_ENV === 'test') {
        handelPopupTransitionStart()
        handelPopupTransitionEnd()
      }
    }

    const preventScrollEvent = (isBind: boolean) => {
      const el = instanc?.proxy?.$el
      const handler = isBind ? 'addEventListener' : 'removeEventListener'
      const masker = el.querySelector('.m-popup-mask')
      const boxer = el.querySelector('.m-popup-box')

      masker && masker[handler]('touchmove', preventDefault, false)
      boxer && boxer[handler]('touchmove', preventDefault, false)
      masker && masker[handler]('scroll', preventDefault, false)
      boxer && boxer[handler]('scroll', preventDefault, false)
    }

    const preventDefault = (event: Event) => {
      event.preventDefault()
    }

    const handelPopupTransitionStart = () => {
      if (!isPopupBoxShow.value) {
        emit('before-hide')
      } else {
        emit('before-show')
      }
    }

    const handelPopupTransitionEnd = () => {
      if (!isAnimation.value) {
        return
      }

      if (!isPopupBoxShow.value) {
        isPopupShow.value = false
        emit('hide')
      } else {
        emit('show')
      }

      isAnimation.value = false
    }

    const handelPopupMaskClick = () => {
      if (maskClosable.value) {
        hidePopupBox()
        emit('mask-click')
      }
    }

    return {
      isPopupShow,
      isPopupBoxShow,
      hasMask,
      largeRadius,
      position,
      transition,
      slots,

      handelPopupMaskClick,
      handelPopupTransitionStart,
      handelPopupTransitionEnd,
      hidePopupBox,
      isNumber,
    }
  },
})
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
@import '../../styles/index.scss';
.m-popup {
  @include absolute-pos();
  position: fixed;
  display: flex;
  pointer-events: none;
  z-index: 999;
  &.center {
    justify-content: center;
  }
  &.top {
    flex-direction: column;
    justify-content: flex-start;
    .m-popup-box {
      width: 100%;
    }
  }
  &.bottom {
    flex-direction: column;
    justify-content: flex-end;
    .m-popup-box {
      width: 100%;
    }
  }
  &.left {
    justify-content: flex-start;
    .m-popup-box {
      height: 100%;
    }
  }
  &.right {
    justify-content: flex-end;
    .m-popup-box {
      height: 100%;
    }
  }
  &.inner-popup .m-popup-box {
    background-color: $color-white;
    border-radius: 8px 8px 0 0;
  }
  &.large-radius.inner-popup .m-popup-box {
    border-radius: 40px 40px 0 0;
  }
}
.m-popup-mask {
  @include absolute-pos();
  position: absolute;
  pointer-events: auto;
  z-index: 1;
  background-color: $color-overlay;
}
.m-popup-box {
  position: relative;
  pointer-events: auto;
  z-index: 2;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  width: 480px;
  height: fit-content;
  background: $color-white;
  border-radius: 20px;
  margin-bottom: 50px;
  overflow-y: scroll;
  @include no-scrollbar;

  @include mobile {
    width: 335px;
  }
  .l0k-swap-modal-wrap {
    padding: 0 20px 20px 20px;
  }
}
.m-mask-fade {
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
