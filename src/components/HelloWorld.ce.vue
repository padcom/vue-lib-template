<template>
  <button class="btn-primary">Hello, world!</button>
</template>

<script lang="ts" setup>
import { watchEffect, type App } from 'vue'
import i18n from '../i18n'

const props = defineProps({
  lang: { type: String, default: '' },
})

watchEffect(() => {
  i18n.global.locale.value = props.lang || i18n.global.locale.value
})

defineOptions({
  configureApp(app: App) {
    app.use(i18n)
  },
})
</script>

<style lang="postcss">
@import '@padcom/nano-css-reset';
@import '../main.css';

:host {
  display: block;
}
</style>
