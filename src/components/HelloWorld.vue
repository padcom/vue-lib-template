<template>
  <h1 class="bg-primary-400">Hello, world! {{ message }}</h1>
</template>

<script lang="ts" setup>
defineProps({
  message: { type: String, default: 'from HelloWorld.vue' },
})
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-3xl;
}
</style>
