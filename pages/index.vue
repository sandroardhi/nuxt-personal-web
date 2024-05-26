<template>
    <div>
        Hellooooooo NUXT 2024!!!
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'Main Page',
  description: "Sandro's portofolio main page",
  ogTitle: 'Main Page',
  ogDescription: "Sandro's portofolio main page",
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Main Page',
  twitterDescription: "Sandro's portofolio main page",
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>