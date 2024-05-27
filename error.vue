<template>
  <NuxtLayout>
    <section>
        <h1 class="text-4xl font-semibold text-gray-700 dark:text-gray-200">{{ props.error.statusCode }}</h1>
        <h1 class="text-3xl text-gray-700 dark:text-gray-200">{{ props.error.statusMessage }}</h1>
        <NuxtLink to="/" class="px-2 py-1 dark:bg-gray-700 dark:text-gray-300 bg-gray-100 text-gray-700 mt-10 inline-block">Get back to home</NuxtLink>
    </section>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: Object,
});
</script>
