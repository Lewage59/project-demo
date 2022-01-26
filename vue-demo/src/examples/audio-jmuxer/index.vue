<template>
  <h2>Audio播放器</h2>
  <hr />
  <audio controls id="player"></audio>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import AudioProcessor from './audioProcessor'

export default {
  setup() {
    const state = reactive({
      audio: null
    })

    const initAudio = () => {
      state.audio = new AudioProcessor({
        // wsUrl: 'ws://localhost:8080', // websocket请求地址
        debug: false,
        flushingTime: 0,
      })
    }

    onMounted(() => {
      initAudio()
    })

    return {
      ...toRefs(state)
    }
  }
}

</script>

<style scoped>

</style>