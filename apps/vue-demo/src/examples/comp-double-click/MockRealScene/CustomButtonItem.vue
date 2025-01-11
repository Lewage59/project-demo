<template>
  <div class="custom-button-item" @click="handleCustomButtonItemClick">
    custom button item
  </div>
</template>

<script setup>
const emits = defineEmits(["a-click"]);

const handleCustomButtonItemClick = () => {
  console.log("CustomButtonItem click handleClick");
  emits("a-click");
};
</script>

<style scoped>
.custom-button-item {
  margin: 20px;
  background-color: red;
}
</style>
