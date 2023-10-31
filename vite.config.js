/* eslint-env node */
import { defineConfig } from 'vitest/config'

import svg from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import i18n from '@intlify/unplugin-vue-i18n/vite'
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
    i18n({
      runtimeOnly: true,
    }),
    eslint({
      lintOnStart: false,
    }),
    dts({ insertTypesEntry: true, rollupTypes: true, logLevel: 'error' }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: pkg.name.split('/').at(-1),
    },
    sourcemap: true,
    rollupOptions: {
      external: [
        'vue',
        'vue-i18n',
      ],
      output: {
        globals: {
          'vue': 'vue',
          'vue-i18n': 'vueI18n',
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
