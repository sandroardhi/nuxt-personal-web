// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark:  'min-dark'
      }
    }
  },
  colorMode: {
    classSuffix: ''
  }
})
