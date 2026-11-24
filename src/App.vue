<template>
  <Counter />
  <p class="note">{{ t('Now, delete me and get to work!') }}</p>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import Counter from './components/Counter.vue'

import { provideCounter } from './composables/counter'

const { t } = useI18n({ useScope: 'global' })

// This is an example composable using @vueuse/core package
provideCounter()
</script>

<style lang="postcss" scoped>
.note {
  @apply mt-10;
}
</style>
