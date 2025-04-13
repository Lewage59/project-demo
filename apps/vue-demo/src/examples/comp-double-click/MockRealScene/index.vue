<template>
  <Wrapper @a-click="handleIndexClick" />
</template>

<script setup>
import Wrapper from "./Wrapper.vue";

const handleIndexClick = () => {
  console.log("index.vue custom-click handleClick");
};
</script>
