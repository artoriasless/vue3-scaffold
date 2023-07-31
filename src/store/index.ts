import { createStore } from 'vuex';
import { cloneDeep } from 'lodash';
import { ElMessage } from 'element-plus';

import { tokenManage } from '@/lib';
import { authService } from '@/service';
import type { IUserInfo } from '@/service/auth-interfaces';

import { DEFAULT_STATE, SYNC_ACTIONS as globalSyncActions } from './constants';
import type { IState, IStore } from './interfaces';

const store = createStore<IState>({
  state: cloneDeep(DEFAULT_STATE),
  mutations: {
    UPDATE_TOKEN(state: IState, token: string) {
      // 更新 token 信息
      state.token = token;

      // 更新到请求头
      tokenManage.set(token);
    },
    // 更新缓存的用户信息，更新到 state
    UPDATE_USER_INFO(state: IState, payload: IUserInfo) {
      state.userInfo = payload;
    },
  },
  actions: {
    FETCH_USER_INFO(store: IStore) {
      return new Promise((resolve, reject) => {
        const noToken = !tokenManage.get()?.trim();

        if (noToken) {
          ElMessage.error('登录信息已过期，请重新登录');

          setTimeout(() => {
            reject(false);
          }, 2000);

          return;
        }

        authService
          .fetchUserInfo()
          .then(res => {
            if (res.success) {
              store.commit(globalSyncActions.UPDATE_USER_INFO, res.data);

              resolve(true);
            } else {
              ElMessage.error(res.message);

              // 设置清除 token 信息
              store.commit(globalSyncActions.UPDATE_TOKEN, '');

              setTimeout(() => {
                reject(false);
              }, 2000);
            }
          })
          .catch(err => {
            if (err.response.status === 401) {
              ElMessage.error('登录信息已过期，请重新登录');
            } else {
              ElMessage.error(String(err));
            }

            // 设置清除 token 信息
            store.commit(globalSyncActions.UPDATE_TOKEN, '');

            setTimeout(() => {
              reject(false);
            }, 2000);
          });
      });
    },
    LOGOUT(store: IStore) {
      return new Promise(resolve => {
        // 设置清除即可
        store.commit(globalSyncActions.UPDATE_TOKEN, '');

        // 返回首页，并强制刷新
        window.location.href = '/';

        resolve(true);
      });
    },
  },
  modules: {},
});

export default store;
