import type { IState } from './interfaces';

// 当前目录存放一般的常量
export const DEFAULT_STATE: IState = {
  userInfo: null,
};

// 以下为一些定义的 mutations ，用常量替代字符串，更方便阅读，因为是同步的，所以统一放在 sync
export const SYNC_ACTIONS = {
  UPDATE_TOKEN: 'UPDATE_TOKEN',
  UPDATE_USER_INFO: 'UPDATE_USER_INFO',
};

// 以下为 actions ，同 mutations，因为是异步的，所以统一放在 async
export const ASYNC_ACTIONS = {
  FETCH_USER_INFO: 'FETCH_USER_INFO',
  LOGOUT: 'LOGOUT',
};
