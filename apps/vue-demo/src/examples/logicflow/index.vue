<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";

defineProps({
  msg: String
})

const count = ref(0)
const lf = ref(null)

onMounted(()=> {
  lf.value = new LogicFlow({
    container: document.querySelector(".container"),
    grid: true
  });
  lf.value.render({
    nodes: [
      {
        id: "1",
        type: "rect",
        x: 100,
        y: 100,
        text: "节点1"
      },
      {
        id: "2",
        type: "circle",
        x: 300,
        y: 200,
        text: "节点2"
      }
    ],
    edges: [
      {
        sourceNodeId: "1",
        targetNodeId: "2",
        type: "polyline",
        text: "连线"
      }
    ]
  });
})
</script>

<style scoped>
.container {
  width: 1000px;
  height: 500px;
  margin: 0 auto;
}
</style>
