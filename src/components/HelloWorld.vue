<template>
  <h1 class="bg-slate-300 text-primary-900">{{ t('messages.hello-world') }} {{ message }}</h1>
  <h2>State: {{ stateLabel }}</h2>
  <button @click="state = 'empty'">Empty state</button>
  <button @click="state = 'example'">Example state</button>
  <br>
  <button @click="locale = 'pl'">PL</button>
  <button @click="locale = 'en'">EN</button>
  <button @click="locale = 'de'">DE</button>
</template>

<script lang="ts" setup>
import { useI18n } from '@/composables/i18n'
import { provideExample } from '@/composables/example'

defineProps({
  message: { type: String, default: 'from HelloWorld.vue' },
})

const { t } = useI18n()
const { locale } = useI18n({ useScope: 'global' })
const { state, stateLabel } = provideExample()
</script>

<i18n>
{
  "en": {
    "messages": {
      "hello-world": "Hello, world!"
    }
  },
  "pl": {
    "messages": {
      "hello-world": "Witaj świecie!"
    }
  },
  "de": {
    "messages": {
      "hello-world": "Hallo Welt!"
    }
  }
}
</i18n>

<style lang="postcss" scoped>
@reference '../main.css';

button {
  @apply btn-primary;
}

h1 {
  color: red;
}
</style>
