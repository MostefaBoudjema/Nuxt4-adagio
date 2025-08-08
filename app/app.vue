<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { watch, onMounted } from 'vue'

const { locale } = useI18n()

function updateDir(lang) {
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
}

onMounted(() => {
  // Set initial dir
  updateDir(locale.value)

  // Watch for locale changes
  watch(locale, (newLocale) => {
    updateDir(newLocale)
  })
})
</script>
