import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { useI18n } from '@/composables/i18n'

import HelloWorld from './HelloWorld.vue'
import { provideExample } from '@/composables/example'

describe('HelloWorld component', () => {
  it('works', () => {
    const component = mount({
      template: '<HelloWorld message="from test" />',
      components: {
        HelloWorld,
      },
      setup() {
        provideExample()

        // this is how you enforce a locale for the component during test
        const { locale } = useI18n({})
        locale.value = 'de'
      },
    })

    expect(component.text()).contains('Hallo Welt!')
    expect(component.text()).contains('from test')
  })
})
