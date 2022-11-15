import { isNumber } from 'lodash'
import { computed, Ref } from 'vue'
import { Position } from '.'

export function useContainerClasses(position: Ref<Position>) {
  return computed(() => [position.value])
}

export function usePreventScrollEventHandler(elements: Ref<Element[]>, preventScroll: Ref<boolean>) {
  const preventDefault = (e: Event) => e.preventDefault()

  return (handler: 'addEventListener' | 'removeEventListener') => {
    elements.value.forEach((element) => {
      if (preventScroll.value) {
        element[handler]('touchmove', preventDefault, false)
        element[handler]('scroll', preventDefault, false)
      }
    })
  }
}

export function useContentStyle(top: Ref<string | number>) {
  return computed(() => ({ marginTop: isNumber(top.value) ? `${top.value}px` : top.value }))
}
