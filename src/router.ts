import { createWebHistory, createRouter, RouteRecordRaw  } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'), 
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
