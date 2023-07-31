import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import constantRoutes from './constant-routes';

export default createRouter({
  history: createWebHistory(__BASE_URL__),
  routes: <Array<RouteRecordRaw>>constantRoutes,
});
