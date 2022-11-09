import path from 'path'
import cssnao from 'cssnano'
import json from '@rollup/plugin-json'
import autoprefixer from 'autoprefixer'
import alias from '@rollup/plugin-alias'
import vuePlugin from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

import postcssImport from 'postcss-import'

const globals = {
  vue: 'Vue',
}
const terserPlugin = terser({
  output: {
    comments: false,
  },
  compress: {
    warnings: false,
    drop_console: true,
    drop_debugger: true,
    pure_funcs: ['console.log'], //移除console
  },
})
export default {
  input: path.resolve(__dirname, 'src/index.ts'),
  output: [
    {
      format: 'umd',
      file: path.resolve(__dirname, './lib/index.js'),
      name: 'example',
      exports: 'named',
      globals,
      assetFileNames: 'assets/[name].[hash][extname]',
    },
    {
      format: 'umd',
      file: path.resolve(__dirname, './lib/index.min.js'),
      name: 'example',
      exports: 'named',
      globals,
      assetFileNames: 'assets/[name].[hash][extname]',
      plugins: [terserPlugin],
    },
    {
      format: 'esm',
      file: path.resolve(__dirname, './lib/index.esm.js'),
      globals,
      assetFileNames: 'assets/[name].[hash][extname]',
    },
    {
      format: 'esm',
      file: path.resolve(__dirname, './lib/index.esm.min.js'),
      globals,
      assetFileNames: 'assets/[name].[hash][extname]',
      plugins: [terserPlugin],
    },
  ],
  plugins: [
    json(),
    nodeResolve({
      mainFields: ['module', 'jsnext:main', 'main', 'browser'],
      extensions: ['.vue', '.ts', '.tsx', '.js'],
    }),
    typescript({
      abortOnError: false,
    }),
    alias({
      entries: {
        '@': '../src',
      },
    }),
    vuePlugin(),
    postcss({
      plugins: [autoprefixer, cssnao(), postcssImport()],
      extract: 'css/index.min.css',
      extensions: ['.scss', '.css', '.less'],
    }),
    commonjs({
      include: ['node_modules/**/*'],
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
    }),
  ],
  external: ['vue'],
}
