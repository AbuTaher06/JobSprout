import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component:NotFoundView,
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobView,
    },
  ],
});

export default router;