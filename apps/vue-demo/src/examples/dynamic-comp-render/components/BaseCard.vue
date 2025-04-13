<script setup>
import { computed } from 'vue'
import TextNode from './nodes/TextNode.vue'
import ImageNode from './nodes/ImageNode.vue'
import LinkNode from './nodes/LinkNode.vue'
import LayoutNode from './nodes/LayoutNode.vue'

const props = defineProps({
  schema: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

const componentMap = {
  text: TextNode,
  image: ImageNode,
  link: LinkNode,
  layout: LayoutNode
}

const currentComponent = computed(() => {
  return componentMap[props.schema.type] || null
})

const isLayoutNode = computed(() => {
  return props.schema.type === 'layout'
})
</script>

<template>
  <div class="base-card" :style="schema.style">
    <component
      v-if="currentComponent"
      :is="currentComponent"
      :schema="schema"
    >
      <template v-if="isLayoutNode && schema.children?.length">
        <BaseCard
          v-for="(child, index) in schema.children"
          :key="index"
          :schema="child"
        />
      </template>
    </component>
  </div>
</template>

<style scoped>
.base-card {
  display: flex;
  flex-direction: column;
}
</style> 