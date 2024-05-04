/* eslint-env node */
import { defineVueLibConfig } from '@padcom/vite-config-vue-lib'
import nesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'

import pkg from './package.json' assert { type: 'json' }

const config = defineVueLibConfig(pkg, {
  css: {
    postcss: {
      plugins: [
        nesting(),
        tailwindcss(),
      ],
    },
  },
})

export default config
