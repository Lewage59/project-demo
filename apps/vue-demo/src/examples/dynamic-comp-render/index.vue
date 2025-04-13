<script setup>
import { ref } from 'vue'
import BaseCard from './components/BaseCard.vue'
import { basicSchema1, articleSchema, productSchema, basicSchema2 } from './schemas'

const schemaList = [
  { name: '基础卡片1', schema: basicSchema1 },
  { name: '基础卡片2', schema: basicSchema2 },
  { name: '文章卡片', schema: articleSchema },
  { name: '商品卡片', schema: productSchema }
]

const currentSchema = ref(schemaList[0].schema)

const handleSchemaChange = (schema) => {
  currentSchema.value = schema
}
</script>

<template>
  <div class="dynamic-render-demo">
    <div class="toolbar">
      <button
        v-for="item in schemaList"
        :key="item.name"
        class="toolbar-btn"
        :class="{ active: currentSchema === item.schema }"
        @click="handleSchemaChange(item.schema)"
      >
        {{ item.name }}
      </button>
    </div>
    <BaseCard :schema="currentSchema" />
  </div>
</template>

<style scoped>
.dynamic-render-demo {
  max-width: 800px;
  margin: 20px auto;
}

.toolbar {
  margin-bottom: 20px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.toolbar-btn {
  margin-right: 12px;
  padding: 6px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: #fff;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.toolbar-btn:hover {
  color: #1890ff;
  border-color: #1890ff;
}

.toolbar-btn.active {
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
}

.toolbar-btn:last-child {
  margin-right: 0;
}
</style> 