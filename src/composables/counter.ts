import { ref, readonly } from 'vue'
import { createInjectionState } from '@vueuse/core'

function createCounter() {
  const counter = ref(0)

  function increment() {
    counter.value++
  }

  function decrement() {
    counter.value--
  }

  function reset() {
    counter.value = 0
  }

  return {
    counter: readonly(counter),
    increment,
    decrement,
    reset,
  }
}

const [provideCounter, useCounterOrUndefined] = createInjectionState(createCounter)

function useCounter() {
  const result = useCounterOrUndefined()
  if (!result) throw new Error('Counter not provided. Call provideCounter() first')

  return result
}

export { provideCounter, useCounter }
