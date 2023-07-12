<!-- eslint-disable max-len -->
<template>
  <article class="prose">
    <h1 class="header">{{ message }}</h1>
    <p class="note">Now, delete me and get to work!</p>
  </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const message = ref('Hello, world!')

function getMessage() {
  return message.value
}

defineExpose({
  getMessage,
})
</script>

<style lang="postcss" scoped>
article {
  @apply h-screen max-w-screen-lg;
  @apply bg-slate-200;
  @apply text-center mx-auto;
}

.header {
  @apply font-mono;
  @apply pt-10;
}

.note {
  @apply text-sm text-gray-500 font-extralight;
}
</style>
