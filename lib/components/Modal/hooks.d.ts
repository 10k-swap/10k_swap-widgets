import { Ref } from 'vue';
import { Position } from '.';
export declare function useContainerClasses(position: Ref<Position>): import("vue").ComputedRef<Position[]>;
export declare function usePreventScrollEventHandler(elements: Ref<Element[]>, preventScroll: Ref<boolean>): (handler: 'addEventListener' | 'removeEventListener') => void;
export declare function useContentStyle(top: Ref<string | number>): import("vue").ComputedRef<{
    marginTop: string;
}>;
