<template>
  <div class="not-prose">
    <section v-if="pending">Loading</section>
    <section v-else-if="error">
      Hmm something went wrong... do try again!
    </section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repo in repos"
          :key="repo.id"
          class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 dark:hover:bg-gray-700 font-mono"
        >
          <a :href="repo.html_url" target="_blank">
            <div class="flex items-center justify-between mb-3">
              <div class="font-semibold">{{ repo.name }}</div>
              <div class="">{{ repo.language }}</div>
            </div>
            <p class="text-sm">
              {{ repo.description }}
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const { error, pending, data } = await useFetch(
  "https://api.github.com/users/sandroardhi/repos"
);

const repos = computed(
  () => data.value.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
)

// kalau pakai braces, kita harus explicitly return kabeh
// const repos = computed(() => {
//   return data.value.sort((a, b) => {
//     return new Date(b.created_at) - new Date(a.created_at);
//   });
// });


console.log()
</script>
