<template>
  <div class="home">
    <img class="image" alt="Vue logo" src="../assets/logo.png" />
    <h2>Vue3 Demo List</h2>
    <ul class="content">
      <li><router-link to="/logicflow">logicFlow流程图框架</router-link></li>
      <li><router-link to="/audio-jmuxer">JMuxer音视频处理器</router-link></li>
      <li><router-link to="/control-panel">基于konva实现的控制面板</router-link></li>
      <li><router-link to="/focus-input">鼠标聚焦输入实现</router-link></li>
      <li><router-link to="/cron">基于 element ui 的 cron 组件</router-link></li>
    </ul>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'

export default {
  // setup() {

  // }
}

</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.image {
  height: 200px;
  width: 200px;
}
.content {

}
</style>