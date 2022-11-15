import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'Bundle',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue(), vueJsx(), dts({ include: './src' })],
})
