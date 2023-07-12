<!-- eslint-disable max-len -->
<template>
  <article class="prose">
    <h1 class="header">{{ message }}</h1>
    <p class="note">Now, delete me and get to work!</p>
    <button type="button" class="btn">Say hello!</button>
  </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const message = ref('Hello, world!')

defineExpose({
  message,
})
</script>

<style lang="postcss" scoped>
.prose {
  @apply h-screen max-w-none;
  @apply bg-slate-100;
  @apply text-center mx-auto;
}

.header {
  @apply font-mono;
  @apply pt-10;
}

.note {
  @apply text-gray-500 text-sm font-extralight;
}
</style>
