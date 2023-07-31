import type { Commit } from 'vuex';

import type { IUserInfo } from '@/service/auth-interfaces';

export interface IState {
  token: string;
  userInfo: null | IUserInfo;
}

export interface IStore {
  state: IState;
  commit: Commit;
}
