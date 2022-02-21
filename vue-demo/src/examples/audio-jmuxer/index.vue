<template>
  <h2>Audio播放器</h2>
  <hr />
  <audio controls id="player"></audio>
  <button @click="playAudio">play</button><button @click="pauseAudio">pause</button>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import AudioProcessor from './audioProcessor'

export default {
  setup() {
    const state = reactive({
      audio: null
    })

    return {
      ...toRefs(state)
    }
  },
  methods: {
    initAudio() {
      this.audio = new AudioProcessor({
        node: 'player',
        wsUrl: 'ws://localhost:7777/websockets/audio/b7bb4b03-7f37-4e3e-bede-6b1733c8609d/7XBRX18A11003997', // websocket请求地址
        readFpsFromTrack: true,
        debug: true
      })
    },
    playAudio() {
      this.initAudio()
      this.audio.onPlay()
    },
    pauseAudio() {
      this.audio.onDestroy()
    }
  },
}

</script>

<style scoped>

</style>