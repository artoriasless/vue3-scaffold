import NProgress from 'nprogress';

import router from '@/router';
import withoutLoginRoutes from '@/router/without-login-routes';

import store from '@/store';

import { ASYNC_ACTIONS as globalAsyncActions } from '@/store/constants';

import 'nprogress/nprogress.css';

const permission = () => {
  NProgress.configure({ showSpinner: false });

  router.beforeEach((to, from, next) => {
    NProgress.start();

    // 如果当前页面为免登页面，直接放过
    if (withoutLoginRoutes.includes(to.path)) {
      next();
    } else {
      // 如果当前页面不为免登页面，判断是否有登录信息
      if (store.state.userInfo) {
        // 有登录信息，放过
        next();
      } else {
        // 缺少登录信息，获取一次登录信息
        store
          .dispatch(globalAsyncActions.FETCH_USER_INFO)
          .then(() => {
            // 如果正常执行，说明获取登录后的用户信息成功，则放过
            next();
          })
          .catch(() => {
            // 如果抛错，说明获取登录后的用户信息失败，跳转到登录页面
            next({
              path: '/login',
              query: {
                redirect: to.fullPath,
              },
            });
          });
      }
    }

    NProgress.done();
  });

  router.afterEach(() => {
    NProgress.done();
  });
};

export default permission;
