<!-- eslint-disable max-len -->
<template>
  <h2 class="header">{{ message }}</h2>
  <p class="note">Now, delete me and get to work!</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const message = ref('Hello, world!')
</script>

<style lang="postcss" scoped>
.header {
  @apply my-4;
  @apply text-center;
  @apply text-3xl font-mono font-bold;
}

.note {
  @apply text-center;
  @apply text-sm text-gray-500 font-extralight;
}
</style>
