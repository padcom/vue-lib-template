import { defineVueLibConfig } from '@padcom/vite-config-vue-lib'
import i18n from '@intlify/unplugin-vue-i18n/vite'
import nesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'

import pkg from './package.json'

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
