import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  /**
   * 每个 Demo 都是独立的根路由
   */
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/logicflow',
      name: 'logicflow',
      component: () => import(/* webpackChunkName: "logicflow" */ '@/examples/logicflow/index.vue')
    },
    {
      path: '/audio-jmuxer',
      name: 'audio-jmuxer',
      component: () => import(/* webpackChunkName: "audio-jmuxer" */ '@/examples/audio-jmuxer/index.vue')
    },
  ]
})

export default router