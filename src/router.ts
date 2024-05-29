import { createWebHistory, createRouter, RouteRecordRaw  } from 'vue-router';

import DetailPath1 from '@/components/DetailPath1.vue';
import DetailPath2 from '@/components/DetailPath2.vue';



const routes: RouteRecordRaw[] = [
  {
    path: '/H',
    name: 'Home',
    component: () => import('@/views/Home.vue'), 
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/components/Detail.vue'),
    children: [
      {
        path: `1`,
        name: 'DetailPath1',
        component: DetailPath1
      },
      {
        path: `2`,
        name: 'DetailPath2',
        component: DetailPath2
      }
    ]
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
