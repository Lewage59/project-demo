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
  <span class="text-node" :style="schema.style">{{ schema.content }}</span>
</template>

<style scoped>
.text-node {
  font-size: 14px;
  line-height: 1.5;
}
</style> 