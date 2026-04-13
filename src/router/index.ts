import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import TestPage from '@/views/TestPage.vue'
import DeviceManagement from '@/views/DeviceManagement.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/TestPage.vue'),
    },
    {
      path: '/devices',
      name: 'devices',
      component: () => import('@/views/DeviceManagement.vue'),
    },
  ],
})

export default router
