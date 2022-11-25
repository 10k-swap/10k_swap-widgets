# 10k Swap Widget

This repository contains the 10kswap swap widgets code.

The Swap Widget bundles the whole swapping experience into a single Vue3 component that developers can easily embed in their app with one line of code.

![swap widget screenshot](https://github.com/10k-swap/10k_swap-widgets/blob/main/widget-screenshot.jpg)

You can customize the theme (colors, fonts, and more) to match the style of your application.

## Installation

Install the widgets library via `npm` or `yarn`.

```bash
yarn add https://github.com/10k-swap/10k_swap-widgets.git#main
```

```bash
npm i --save https://github.com/10k-swap/10k_swap-widgets.git#main
```

## Usage

### Vue environment

```html
<template>
  <SwapWidget />
</template>

<script>
  import { defineComponent } from "vue";
  import SwapWidget from "10k_swap-widgets";
  import "../node_modules/10k_swap-widgets/lib/style.css";

  export default defineComponent({
    components: {
      SwapWidget,
    },
  });
</script>
```

## Customizing the Width

The swap widget has a fixed height of 370px and a default width of 370px. You cannot modify the height of the widget. You can modify the width up to a minimum width of 300px.

```html
<template>
  <div class="wrapper">
    <SwapWidget />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import SwapWidget from "10k_swap-widgets";
  import "../node_modules/10k_swap-widgets/lib/style.css";

  export default defineComponent({
    components: {
      SwapWidget,
    },
  });
</script>
<style>
.wrapper {
  /* overwrite the width to 330px */
  --10k-swap-width-content: 330px;
}
</style>
```

## CSS variables

`SwapWidget` only comes with some barebones styling by default, but it also uses a list of predefined CSS variables. You can overwrite these variables to suit your needs.

| CSS variable                            | Example value                       |
| --------------------------------------- | ----------------------------------- |
| `--10k-swap-width-content`              | 350px                               |
| `--10k-swap-color-primary`              | #3bc6a5                             |
| `--10k-swap-color-danger`               | #cc1010                             |
| `--10k-swap-font-color-primary`         | #111                                |
| `--10k-swap-font-color-secondary`       | #666                                |
| `--10k-swap-font-color-description`     | #999                                |
| `--10k-swap-font-color-light`           | #ccc                                |
| `--10k-swap-color-bg`                   | hsl(220, 23%, 97.5%)                |
| `--10k-swap-color-bg-light`             | #ccc                                |
| `--10k-swap-color-bg-plain`             | #eaeaea                             |
| `--10k-swap-color-bg-secondary`         | #f2f2f2                             |
| `--10k-swap-color-bg-secondary-hover`   | rgba(242, 242, 242, 0.5)            |
| `--10k-swap-font-size-mini`             | 12px                                |
| `--10k-swap-font-size-sm`               | 14px                                |
| `--10k-swap-font-size-normal`           | 16px                                |
| `--10k-swap-font-size-md`               | 20px                                |
| `--10k-swap-font-size-lg`               | 28px                                |

## Example

To start the example:

```bash
git clone https://github.com/10k-swap/10k_swap-widgets.git # clone

yarn          # install dependencies
cd ./example
yarn dev    # run the development server
# or
npm           # install dependencies
cd ./example
npm run dev # run the development server
```
