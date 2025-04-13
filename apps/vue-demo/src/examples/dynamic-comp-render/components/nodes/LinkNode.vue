<script setup>
defineProps({
  schema: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
</script>

<template>
  <a class="link-node" :href="schema.href" :style="schema.style" target="_blank">{{ schema.content }}</a>
</template>

<style scoped>
.link-node {
  color: #1890ff;
  text-decoration: none;
}

.link-node:hover {
  text-decoration: underline;
}
</style> 