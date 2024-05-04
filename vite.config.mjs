/* eslint-env node */
import { defineVueLibConfig } from '@padcom/vite-config-vue-lib'
import i18n from '@padcom/vite-plugin-vue-i18n-kudutsa'
import nesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'

import pkg from './package.json' assert { type: 'json' }

export default defineVueLibConfig(pkg, {
  plugins: [
    i18n(),
  ],
  css: {
    postcss: {
      plugins: [
        nesting(),
        tailwindcss(),
      ],
    },
  },
})
