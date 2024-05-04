/* eslint-env node */
import { createI18n } from '@padcom/vue-i18n-kudutsa'
import { config } from '@vue/test-utils'

config.global.plugins = [
  createI18n({}),
]
