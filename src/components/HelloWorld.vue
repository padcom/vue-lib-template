<template>
  <h1 class="bg-primary-400">{{ t('Hello, world!') }} {{ message }}</h1>
  <h2>State: {{ state }}</h2>
</template>

<script lang="ts" setup>
import { useI18n } from '@/composables/i18n'
import { useExample } from '@/composables/example'

defineProps({
  message: { type: String, default: 'from HelloWorld.vue' },
})

const { t } = useI18n()
const { state } = useExample()
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
