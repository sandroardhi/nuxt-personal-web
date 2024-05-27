// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
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
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }

})
