<template>
  <BoxA @a-click="handleIndexClick" />
</template>

<script setup>
import BoxA from "./BoxA.vue";

const handleIndexClick = () => {
  console.log("index.vue a-click handleIndexClick");
};
</script>
