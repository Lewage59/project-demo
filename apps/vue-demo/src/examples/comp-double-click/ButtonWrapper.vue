<template>
  <MiddleSlot>
    <CustomButtonItem />
  </MiddleSlot>
</template>

<script setup>
import { useAttrs } from "vue";
import CustomButtonItem from "./CustomButtonItem.vue";
import MiddleSlot from "./MiddleSlot.vue";

console.log("ButtonWrapper", useAttrs());
</script>

<style scoped>
.button-wrapper {
  overflow: hidden;
  background-color: aqua;
}
</style>
