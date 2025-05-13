<template>
  <HelloWorld message="from library" />
  <p class="note">{{ t('Now, delete me and get to work!') }}</p>
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
import { useI18n } from '@/composables/i18n'
import { provideExample } from '@/composables/example'

const { t } = useI18n({ useScope: 'global' })

// This is an example composable using @vueuse/core package
provideExample()
</script>

<style lang="postcss" scoped>
.note {
  @apply mt-10;
}
</style>
