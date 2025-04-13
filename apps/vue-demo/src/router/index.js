import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  /**
   * 每个 Demo 都是独立的根路由
   */
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    },
    {
      path: "/logicflow",
      name: "logicflow",
      component: () =>
        import(
          /* webpackChunkName: "logicflow" */ "@/examples/logicflow/index.vue"
        ),
    },
    {
      path: "/audio-jmuxer",
      name: "audio-jmuxer",
      component: () =>
        import(
          /* webpackChunkName: "audio-jmuxer" */ "@/examples/audio-jmuxer/index.vue"
        ),
    },
    {
      path: "/control-panel",
      name: "control-panel",
      component: () =>
        import(
          /* webpackChunkName: "control-panel" */ "@/examples/control-panel/index.vue"
        ),
    },
    {
      path: "/focus-input",
      name: "focus-input",
      component: () =>
        import(
          /* webpackChunkName: "focus-input" */ "@/examples/focus-input/index.vue"
        ),
    },
    {
      path: "/cron",
      name: "cron",
      component: () =>
        import(/* webpackChunkName: "demo" */ "@/examples/cron/index.vue"),
    },
    {
      path: "/codemirror",
      name: "codemirror",
      component: () =>
        import(
          /* webpackChunkName: "demo" */ "@/examples/codemirror/index.vue"
        ),
    },
    {
      path: "/comp-double-click",
      name: "comp-double-click",
      component: () =>
        import(
          /* webpackChunkName: "demo" */ "@/examples/comp-double-click/index.vue"
        ),
    },
    {
      path: "/dynamic-comp-render",
      name: "dynamic-comp-render",
      component: () =>
        import(
          /* webpackChunkName: "demo" */ "@/examples/dynamic-comp-render/index.vue"
        ),
    },
    {
      path: "/demo",
      name: "demo",
      component: () =>
        import(/* webpackChunkName: "demo" */ "@/examples/demo/index.vue"),
    },
  ],
});

export default router;
