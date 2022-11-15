import { PropType } from 'vue'

export type Position = 'bottom' | 'top' | 'left' | 'right' | 'center'
export type Transition =
  | 'l0k-swap-slide-up'
  | 'l0k-swap-slide-down'
  | 'l0k-swap-slide-right'
  | 'l0k-swap-slide-left'
  | 'l0k-swap-zoom'
  | 'l0k-swap-fade'
  | 'l0k-swap-bounce'

export const props = {
  position: {
    type: String as PropType<Position>,
    default: 'center',
    validator(val: Position): boolean {
      return ['bottom', 'top', 'left', 'right', 'center'].includes(val)
    },
  },
  transition: {
    type: String as PropType<Transition>,
    default(props: { position: Position }): Transition {
      switch (props.position) {
        case 'bottom':
          return 'l0k-swap-slide-up'
        case 'top':
          return 'l0k-swap-slide-down'
        case 'left':
          return 'l0k-swap-slide-right'
        case 'right':
          return 'l0k-swap-slide-left'
        case 'center':
          return 'l0k-swap-zoom'
        default:
          return 'l0k-swap-fade' // fade/fade-bounce/fade-slide/fade-zoom
      }
    },
  },
  preventScroll: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  hasOverlay: {
    type: Boolean,
    default: true,
  },
  maskClosable: {
    type: Boolean,
    default: true,
  },
  appendToBody: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
  },
  top: {
    type: [Number, String],
    default: 200,
  },
}
