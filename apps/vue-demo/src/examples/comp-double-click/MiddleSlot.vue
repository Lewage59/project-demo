<template>
  <OnlyChild v-bind="$attrs" @a-click="handleMiddleSlotClick">
    <slot></slot>
  </OnlyChild>
</template>

<script setup>
import { useAttrs } from "vue";
import OnlyChild from "./only-child";

console.log("MiddleSlot", useAttrs());

const handleMiddleSlotClick = () => {
  console.log("MiddleSlot click handleClick");
};
</script>
