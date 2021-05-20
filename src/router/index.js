import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/gallery',

  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/views/Gallery/Gallery.vue'),

    children: [
      {
        path: 'details',
        name: 'details',
        component: () => import('@/views/Details/Details.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About/About.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
