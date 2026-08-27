import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Layout from '@/layouts/index.vue';

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
      {
        path: '/category/:categoryName',
        name: 'Category',
        component: () => import('@/views/category/index.vue'),
      },
      {
        path: '/blog/:blogId',
        name: 'Blog',
        component: () => import('@/views/blog/index.vue'),
      },
      {
        path: '/tag/:tagName',
        name: 'Tag',
        component: () => import('@/views/tag/index.vue'),
      },
      {
        path: '/friend',
        name: 'Friend',
        component: () => import('@/views/friend/index.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
      },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
