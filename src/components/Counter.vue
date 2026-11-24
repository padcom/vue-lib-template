<template>
  <div class="counter">
    <h3>Counter: {{ counter }}</h3>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <button @click="reset()">0</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/counter'

const { counter, increment, decrement, reset } = useCounter()
</script>

<style lang="postcss">
.counter {
  display: flex;
}
</style>
