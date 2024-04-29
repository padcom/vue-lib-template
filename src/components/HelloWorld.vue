<template>
  <h1 class="bg-primary-400">{{ t('Hello, world!') }} {{ message }}</h1>
</template>

<script lang="ts" setup>
import { useI18n } from '@/composables/i18n'

defineProps({
  message: { type: String, default: 'from HelloWorld.vue' },
})

const { t } = useI18n()
</script>

<i18n>
{
  "de": {
    "Hello, world!": "Hallo Welt!"
  },
  "pl": {
    "Hello, world!": "Witaj świecie!"
  }
}
</i18n>

<style lang="postcss" scoped>
h1 {
  @apply text-3xl;
}
</style>
