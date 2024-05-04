import '@padcom/nano-css-reset'
import './tailwind.css'

import { createApp } from 'vue'
import { createI18n } from '@padcom/vue-i18n-kudutsa'

import App from './App.vue'
import * as messages from './locale'

const i18n = createI18n({
  messages,
})

createApp(App).use(i18n).mount('#app')
