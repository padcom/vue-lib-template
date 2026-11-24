import { createApp } from 'vue'

import App from './App.vue'
import './components/HTMLHelloWorldElement'

import i18n from './i18n'

createApp(App)
  .use(i18n)
  .mount('#app')
