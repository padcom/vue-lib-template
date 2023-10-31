import '@padcom/nano-css-reset'
import './tailwind.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

const i18n = createI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages: {},
  missingWarn: false,
  fallbackWarn: false,
  legacy: false,
})

createApp(App)
  .use(i18n)
  .mount('#app')
