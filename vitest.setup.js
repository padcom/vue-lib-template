/* eslint-env node */
import { createI18n } from '@padcom/vue-i18n'
import { config } from '@vue/test-utils'

const i18n = {
  install: createI18n,
}

config.global.plugins = [
  i18n,
]
