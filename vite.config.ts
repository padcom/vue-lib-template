import { fileURLToPath } from 'url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
// @ts-ignore because there is no type information for this library
import eslint from 'vite-plugin-eslint'
import { createHtmlPlugin as html } from 'vite-plugin-html'
// @ts-ignore because there is no type information for this library
import nesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import pkg from './package.json'

// eslint-disable-next-line max-lines-per-function
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    eslint(),
    html({
      // Add environment variables to build
      // https://github.com/vitejs/vite/issues/3105#issuecomment-1435320286
      inject: {
        data: {
          mode,
          ...process.env,
          ...pkg,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        nesting(),
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      enabled: true,
      reporter: ['text', 'lcov'],
    },
  },
}))
