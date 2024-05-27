<template>
  <article
    class="prose dark:prose-invert max-w-none prose-pre:bg-gray-200 dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <ContentDoc>
      <!-- start not found slot -->
      <template #not-found> 
        <h1>Document not found :(</h1>
        <p>This blog post could not be found. Please try another post.</p>
      </template>
      <!-- end not found slot -->

      <!-- start doc slot -->
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{ 'col-span-4': doc.toc, 'col-span-6': !doc.toc }">
            <ContentRenderer :value="doc" />
          </div>
          <div class="col-span-2" v-if="doc.toc">
            <aside class="sticky top-8">
              <div class="font-semibold">Table Of Contents</div>
              <nav class="not-prose">
                <TocLinks :links="doc.body.toc.links" :active-id="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
      <!-- end doc slot -->
    </ContentDoc>
  </article>
</template>

<script setup>
const activeId = ref(null);
onMounted(() => {
  let elements = []
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break;
      }
    }
  };
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });
  setTimeout(() => {
    elements = document.querySelectorAll("h2", "h3");
  
    elements.forEach((element) => {
      observer.observe(element);
    });

  }, 150)
  
  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element);
    }
  });
});

</script>

<style></style>
