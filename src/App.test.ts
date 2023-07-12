import { describe, beforeEach, it, expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

import App from './App.vue'

describe('App', () => {
  let app: VueWrapper<InstanceType<typeof App>>

  beforeEach(() => {
    app = mount(App)
  })

  it('will mount', () => {
    expect(app.text()).toContain('Hello, world!')
  })

  it('will have hello message', () => {
    expect(app.vm.message).toBe('Hello, world!')
  })
})
