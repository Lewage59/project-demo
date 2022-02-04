<template>
  <h2>canvas控制面板</h2>
  <hr/>
  <div id="device" class="panel"></div>
</template>

<script>
import ControlPanel from './core/controlPanel'
import { onMounted } from '@vue/runtime-core'

export default {
  setup() {
    onMounted(() => {
      const controlPanel = new ControlPanel({
        node: 'device' // id
      })

      controlPanel.createRocker()
    })
  }
}
</script>

<style scoped>
.panel {
  height: 375px;
  width: 667px;
  border: 1px solid #ccc;
  /* background-color: #ccc; */
}
</style>