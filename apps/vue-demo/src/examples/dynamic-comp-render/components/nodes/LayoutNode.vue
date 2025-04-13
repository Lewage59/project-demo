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
  <div class="layout-node" :style="[schema.style]">
    <slot />
  </div>
</template>


<style scoped>
.layout-node {
  box-sizing: border-box;
}
</style> 