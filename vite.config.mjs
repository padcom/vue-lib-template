import { defineVueLibConfig } from '@padcom/vite-config-vue-lib'

import pkg from './package.json' with { type: 'json' }

export default defineVueLibConfig(pkg, {
  build: {
    copyPublicDir: false,
  },
})
