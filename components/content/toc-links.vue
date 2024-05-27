<template>
  <ul>
    <li v-for="(link, i) in props.links" :key="i">
      <NuxtLink :to="{path: route.path, hash: `#${link.id}`}" :class="{'ml-4': level, 'text-green-600 dark:text-green-400': props.activeId === link.id}">
        {{ link.text }}
      </NuxtLink>
      <!-- this is so cool, recurring components! -->
      <TocLinks :links="link.children" :level="level + 1" :active-id="props.activeId"/>
    </li>
  </ul>
</template>

<script setup>
const route = useRoute()
const props = defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0
  },
  activeId: {
    type: String,
    default: null
  }
})
</script>
