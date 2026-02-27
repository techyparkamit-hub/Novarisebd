export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  build: {
    transpile: ['@heroicons/vue']
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'bn', file: 'bn.json' }
    ],
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'en'
    }
  }
})
