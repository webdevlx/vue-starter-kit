import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/HomeView.vue" /* webpackChunkName: "home-view" */)
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("@/views/AboutView.vue" /* webpackChunkName: "about-view" */)
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
