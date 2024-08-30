import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: () => import('../views/PedidosView.vue')
    }
  ]
})

export default router
