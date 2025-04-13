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
  <img class="image-node" :src="schema.src" :style="schema.style" alt="" />
</template>

<style scoped>
.image-node {
  max-width: 100%;
  height: auto;
}
</style> 