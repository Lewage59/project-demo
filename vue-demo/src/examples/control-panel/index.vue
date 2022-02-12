<template>
  <h2>canvas控制面板</h2>
  <hr/>
  <button @click="hidePanel">hidePanel</button>
  <button @click="showPanel">showPanel</button>
  <input type="text" v-model="cpOpacity">
  <div id="device" class="panel"></div>
</template>

<script>
import ControlPanel from './core/controlPanel'
import { onMounted, reactive, toRefs } from '@vue/runtime-core'

let controlPanel = null

export default {
  setup() {
    const state = reactive({
      controlPanel: null,
      cpOpacity: 1
    })

    onMounted(() => {
      controlPanel = new ControlPanel({
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
      controlPanel.hide()
    },
    showPanel() {
      controlPanel.show()
    }
  },
  watch: {
    cpOpacity (val) {
      if (Number(val)) {
        controlPanel.opacity(Number(val))
      }
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