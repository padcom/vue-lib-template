import { ref, computed } from 'vue'
import { createInjectionState } from '@vueuse/core'
import { useI18n } from './i18n'

function createExample() {
  const { t } = useI18n({ useScope: 'global' })
  const state = ref('empty')
  const stateLabel = computed(() => t(`state.${state.value}`))

  return {
    state,
    stateLabel,
  }
}

const [provideExample, useExampleOrUndefined] = createInjectionState(createExample)

function useExample() {
  const result = useExampleOrUndefined()
  if (!result) throw new Error('Example not provided. Call provideExample() first')

  return result
}

export { provideExample, useExample }
