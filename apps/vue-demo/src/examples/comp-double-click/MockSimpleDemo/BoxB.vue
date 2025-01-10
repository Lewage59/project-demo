<template>
  <BoxC v-bind="$attrs" @a-click="handleBoxBClick" />
</template>

<script setup>
import { useAttrs } from "vue";
import BoxC from "./BoxC.vue";

console.log("BoxB attrs", useAttrs());

const handleBoxBClick = () => {
  console.log("BoxB click handleBoxBClick");
};
</script>
