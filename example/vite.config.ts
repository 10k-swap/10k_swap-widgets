import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3456,
    host: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    eslintPlugin({
      include: ['./**/*.ts', './**/*.tsx', './**/*.vue', './*.ts', './*.tsx', './*.vue'],
    }),
  ],
})
