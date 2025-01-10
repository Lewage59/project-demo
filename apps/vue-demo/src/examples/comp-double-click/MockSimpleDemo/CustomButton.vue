<template>
  <div class="custom-button" @click="handleCustomButtonClick">
    custom button
  </div>
</template>

<script setup>
import { useAttrs } from "vue";
const emits = defineEmits(["a-click"]);

console.log("CustomButton attrs", useAttrs());

const handleCustomButtonClick = () => {
  console.log("CustomButton click handleCustomButtonClick");
  emits("a-click");
};
</script>

<style scoped>
.custom-button {
  margin: 20px;
  background-color: rgb(0, 255, 51);
}
</style>
