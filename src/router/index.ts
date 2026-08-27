import {createRouter, createWebHashHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import Layout from '@/layouts/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      },
    ]
  },
  {path: '/:pathMatch(.*)*', redirect: '/'},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
