import { createI18n } from '@padcom/vue-i18n'
import '@padcom/nano-css-reset'
import './tailwind.css'

import { createApp } from 'vue'

import App from './App.vue'

createI18n({})
createApp(App).mount('#app')
