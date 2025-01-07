<template>
  <ButtonWrapper @a-click="handleWrapperClick" />
</template>

<script setup>
import ButtonWrapper from "./ButtonWrapper.vue";

const emits = defineEmits(["custom-click"]);

const handleWrapperClick = () => {
  console.log("Wrapper click handleClick");
  emits("custom-click");
};
</script>
