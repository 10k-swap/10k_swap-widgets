import { Ref } from 'vue'

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
