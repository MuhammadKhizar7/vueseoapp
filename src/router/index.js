import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/block/:id',
      name: 'block-show',
      component: () => import('../views/Block.vue'),
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/About.vue'),
    },
  ],
})

export default router
