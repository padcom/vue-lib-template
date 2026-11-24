import { defineCustomElement } from 'vue'

import HelloWorldCe from './HelloWorld.ce.vue'

class HTMLHelloWorldElement extends defineCustomElement(HelloWorldCe) {
  // do low-level custom element stuff here
}

if (!customElements.get('hello-world')) {
  customElements.define('hello-world', HTMLHelloWorldElement)
}
