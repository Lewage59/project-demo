<template>
  <h2>canvas控制面板</h2>
  <hr/>
  <button @click="hidePanel">hidePanel</button>
  <button @click="showPanel">showPanel</button>
  <div id="device" class="panel"></div>
</template>

<script>
import ControlPanel from './core/controlPanel'
import { onMounted, reactive, toRefs } from '@vue/runtime-core'

export default {
  setup() {
    const state = reactive({
      controlPanel: null
    })

    onMounted(() => {
      const controlPanel = new ControlPanel({
        node: 'device' // id
      })

      const rocker = controlPanel.createRocker()

      // rocker.addEventListener('shakeChange', function (pos) {
      //   console.log(pos)
      // })
    })

    return {
      ...toRefs(state)
    }
  },
  methods: {
    hidePanel () {
      this.controlPanel.hide()
    },
    showPanel() {
      this.controlPanel.show()
    }
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