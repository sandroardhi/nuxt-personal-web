<template>
  <div class="container mx-auto max-w-4xl">
      <header class="flex justify-between items-center mt-5 mb-10">
        <div>
          <NuxtLink
            to="/"
            class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >SANDRO NUXT</NuxtLink
          >
        </div>

        <MenuItem />
      </header>

    <main class="p-2">
      <slot />
    </main>
  </div>
</template>

<script setup>

useHead({
  titleTemplate: "%s - Sandro Ardhi Saputra",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: "Karla";
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
