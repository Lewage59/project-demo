<template>
  <BoxB @a-click="handleBoxAClick" />
</template>

<script setup>
import { useAttrs } from "vue";
import BoxB from "./BoxB.vue";

console.log("BoxA attrs", useAttrs());

const handleBoxAClick = () => {
  console.log("BoxA click handleBoxAClick");
};
</script>
