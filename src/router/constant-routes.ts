import Layout from '@/layout/index.vue';
import BridgeRoute from '@/layout/bridge-route.vue';

// 之所以这样动态引入，因为存在循环引用，会导致热更新失败
const modules = import.meta.glob('../views/**/**.vue');

// 页面对应路径名定义

// 固定页面
const page404Path = '../views/errors/page-404/index.vue';

// 首页
const homePagePath = '../views/home/index.vue';

// 登录页面
const loginPath = '../views/login/index.vue';

// 个人中心
const profilePath = '../views/profile/index.vue';

// 公共路由
export default [
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
    name: 'PageAllMatcher',
  },
  {
    path: '/404',
    component: modules[page404Path],
    name: 'Page404',
    meta: { title: '404' },
  },
  {
    path: '',
    name: 'DakSite_HomePage',
    redirect: '/home',
    component: BridgeRoute,
    children: [
      {
        path: '/home',
        name: 'HomePage',
        meta: { title: 'vue3 scaffold application' },
        component: modules[homePagePath],
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: modules[loginPath],
  },
  {
    path: '/profile',
    name: 'DakSite_Profile',
    meta: { title: '个人中心' },
    component: Layout,
    children: [
      {
        path: '',
        name: 'Profile',
        meta: { title: '个人中心' },
        component: modules[profilePath],
      },
    ],
  },
];
