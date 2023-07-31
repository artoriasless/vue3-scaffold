// import { request } from '@/lib';

import type {
  IFetchUserInfoRes,
  ILoginJsonData,
  ILoginRes,
  IRegisterJsonData,
  IRegisterRes,
  IUserInfo,
} from './auth-interfaces';
import { fetchUserInfo_mock, login_mock, register_mock } from './_mock_';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const login = (data: ILoginJsonData): Promise<ILoginRes> =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  new Promise((resolve, reject) => {
    const res = login_mock;
    const result = {
      success: res.success,
      message: res.message,
      data: <string>res.data,
    };

    resolve(result);

    // request({
    //   url: '/api/auth/login',
    //   method: 'post',
    //   data,
    // })
    //   .then(res => {
    //     const result = {
    //       success: res.success,
    //       message: res.message,
    //       data: <string>res.data,
    //     };

    //     resolve(result);
    //   })
    //   .catch(reject);
  });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const register = (data: IRegisterJsonData): Promise<IRegisterRes> =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  new Promise((resolve, reject) => {
    const res = register_mock;
    const result = {
      success: false,
      message: res.message,
      data: '',
    };

    resolve(result);

    // request({
    //   url: '/api/auth/register',
    //   method: 'post',
    //   data,
    // })
    //   .then(res => {
    //     const result = {
    //       success: res.success,
    //       message: res.message,
    //       data: <string>res.data,
    //     };

    //     resolve(result);
    //   })
    //   .catch(reject);
  });

export const fetchUserInfo = (): Promise<IFetchUserInfoRes> =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  new Promise((resolve, reject) => {
    const res = fetchUserInfo_mock;
    const result = {
      success: res.success,
      message: res.message,
      data: <IUserInfo>res.data,
    };

    resolve(result);

    // request({
    //   url: '/api/auth/fetch-user-info',
    //   method: 'post',
    // })
    //   .then(res => {
    //     const result = {
    //       success: res.success,
    //       message: res.message,
    //       data: <IUserInfo>res.data,
    //     };

    //     resolve(result);
    //   })
    //   .catch(reject);
  });

export default {
  login,
  register,
  fetchUserInfo,
};
