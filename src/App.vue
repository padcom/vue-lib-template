<template>
  <HelloWorld message="from library" />
  <p class="note">{{ t('Now, delete me and get to work!') }}</p>
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
import { useI18n } from '@/composables/i18n'
import { provideExample } from '@/composables/example'

// t()  - use local or application translation if local translation does not exist
const { t } = useI18n()

// This is an example composable using @vueuse/core package
provideExample()
</script>

<i18n>
{
  "pl": {
    "Now, delete me and get to work!": "A teraz mnie usuń i zabieraj się do roboty!"
  },
  "de": {
    "Now, delete me and get to work!": "Jetzt entferne mich und mach dich an die Arbeit!"
  }
}
</i18n>

<style lang="postcss" scoped>
.note {
  @apply mt-10;
}
</style>
