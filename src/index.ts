import { defineCustomElement } from 'vue'

import HelloWorld from './components/HelloWorld.ce.vue'

customElements.define('hello-world', defineCustomElement(HelloWorld))
