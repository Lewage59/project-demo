<template>
  <CustomButton />
</template>

<script setup>
import { useAttrs } from "vue";
import CustomButton from "./CustomButton.vue";

console.log("BoxC attrs", useAttrs());
</script>
