import { createI18n } from '@padcom/vue-i18n'
import '@padcom/nano-css-reset'
import './tailwind.css'

import { createApp } from 'vue'

import App from './App.vue'

createI18n({
  messages: {
    pl: { 'Example': 'Przykład' },
    de: { 'Example': 'Beispiel' },
  },
})
createApp(App).mount('#app')
