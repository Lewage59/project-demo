<template>
  <div class="cron">
    <h1>vue3-cron</h1>
    <el-popover
      v-model:visible="state.cronPopover"
      width="700px"
      trigger="manual"
    >
      <vue3Cron
        @change="changeCron"
        @close="togglePopover(false)"
        max-height="400px"
        i18n="cn"
      ></vue3Cron>
      <template #reference>
        <el-input
          @focus="togglePopover(true)"
          v-model="state.cron"
          placeholder="* * * * * ? *"
        ></el-input>
      </template>
    </el-popover>
  </div>
</template>

<script>
import { reactive, defineComponent, watch } from 'vue'
import { vue3Cron } from 'vue3-cron'
import 'vue3-cron/lib/vue3Cron.css' // 引入样式

export default defineComponent({
  template: '<vue3Cron/>',
  components: { vue3Cron },
  setup() {
    const state = reactive({
      cronPopover: false,
      cron: '',
    })
    const changeCron = (val) => {
      if (typeof val !== 'string') return false
      state.cron = val
    }
    const togglePopover = (bol) => {
      state.cronPopover = bol
    }

    return {
      state,
      changeCron,
      togglePopover,
    }
  },
})
</script>

<style scoped>
.cron {
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
}
.cron h1 {
  font-size: 50px;
  text-align: center;
}
</style>