<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import { createNamespace } from '../../utils/create'
import { TextColor, TextSize } from './types'

const normalColor = (color: TextColor) => (color.indexOf('text') > 0 ? color : `g-${color}`)
const [, bem] = createNamespace('text')

export default defineComponent({
  props: {
    bold: Boolean,
    size: {
      type: String as PropType<TextSize>,
      default: 'normal',
    },
    color: {
      type: String as PropType<TextColor>,
      default: 'normal',
    },
  },
  setup(props) {
    const { size, color, bold } = toRefs(props)

    const classes = computed(() => [
      bem([
        size.value,
        normalColor(color.value),
        {
          bold: bold.value,
        },
      ]),
    ])

    return {
      classes,
    }
  },
})
</script>

<style lang="scss">
@import '../../styles/index.scss';

$text-prefix: '#{$prefix}-text';
$textColors: (
  'g-white': $color-white,
  'g-primary': $color-primary,
  'g-normal': $color-primary-text,
  'danger-text': $color-danger,
  'secondary-text': $color-secondary-text,
  'description-text': $color-description-text,
  'light-text': $color-light-text,
);
$textNames: 'g-primary' 'g-white' 'g-normal' 'secondary-text' 'danger-text' 'description-text' 'light-text';

.#{$text-prefix} {
  font-weight: 400;
  line-height: 24px;

  &--large {
    font-size: $font-size-lg;
    line-height: 40px;
  }

  &--md {
    font-size: $font-size-md;
  }

  &--normal {
    font-size: $font-size-normal;
  }

  &--small {
    line-height: 20px;
    font-size: $font-size-sm;
  }

  &--mini {
    line-height: 18px;
    font-size: $font-size-mini;
  }

  &--bold {
    font-weight: 700;
  }

  @each $name in $textNames {
    &--#{$name} {
      color: map-get($textColors, $name);
    }
  }
}
</style>
