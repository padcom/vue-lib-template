import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18Context } from '@padcom/vue-i18n'

import HelloWorld from './HelloWorld.vue'

describe('HelloWorld component', () => {
  it('works', () => {
    const component = mount({
      template: '<HelloWorld message="from test" />',
      components: {
        HelloWorld,
      },
      setup() {
        createI18Context({})
      },
    })

    expect(component.text()).contains('from test')
  })
})
