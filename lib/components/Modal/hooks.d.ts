import { Ref } from 'vue';
export declare function usePreventScrollEventHandler(elements: Ref<Element[]>, preventScroll: Ref<boolean>): (handler: 'addEventListener' | 'removeEventListener') => void;
