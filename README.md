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

  export default defineComponent({
    components: {
      SwapWidget,
    },
  });
</script>
```

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
