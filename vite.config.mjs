/* eslint-env node */
import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'url'

import svg from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import i18n from '@padcom/vite-plugin-vue-i18n'
import eslint from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'
import nesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import pkg from './package.json' assert { type: 'json' }

export default defineConfig({
  plugins: [
    svg({
      defaultImport: 'component',
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-'),
        },
      },
    }),
    i18n(),
    eslint({
      lintOnStart: false,
    }),
    dts({ insertTypesEntry: true, rollupTypes: true, logLevel: 'error' }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: './src/index.ts',
      name: pkg.name.split('/').at(-1),
    },
    sourcemap: true,
    rollupOptions: {
      external: [
        'vue',
        '@padcom/vue-i18n',
        '@vueuse/core',
      ],
      output: {
        globals: {
          'vue': 'vue',
          '@padcom/vue-i18n': 'vueI18n',
          '@vueuse/core': 'vueUseCore',
        },
      },
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
    setupFiles: [
      './vitest.setup.js',
    ],
    coverage: {
      enabled: true,
      reporter: ['text', 'lcov'],
    },
  },
})
