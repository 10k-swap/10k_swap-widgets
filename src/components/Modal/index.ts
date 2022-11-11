import { PropType } from 'vue'

type PositionType = 'bottom' | 'top' | 'left' | 'right' | 'center'
type TransitionType =
  | 'm-slide-up'
  | 'm-slide-down'
  | 'm-slide-right'
  | 'm-slide-left'
  | 'm-zoom'
  | 'm-fade'
  | 'm-bounce'

export const props = {
  position: {
    type: String as PropType<PositionType>,
    default: 'center',
    validator(val: PositionType): boolean {
      return ['bottom', 'top', 'left', 'right', 'center'].includes(val)
    },
  },
  transition: {
    type: String as PropType<TransitionType>,
    default(props: Props): TransitionType {
      switch (props.position) {
        case 'bottom':
          return 'm-slide-up'
        case 'top':
          return 'm-slide-down'
        case 'left':
          return 'm-slide-right'
        case 'right':
          return 'm-slide-left'
        case 'center':
          return 'm-zoom'
        default:
          return 'm-fade' // fade/fade-bounce/fade-slide/fade-zoom
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
  hasMask: {
    type: Boolean,
    default: true,
  },
  maskClosable: {
    type: Boolean,
    default: true,
  },
  appendToBody: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String
  },
  top: {
    type: [Number, String],
    default: 200,
  },
}

export interface Props {
  position: PositionType
  transition: TransitionType
  preventScroll: boolean
  modelValue: boolean
  hasMask: boolean
  maskClosable: boolean
  appendToBody: boolean
}
