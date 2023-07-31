import axios, { type AxiosRequestConfig } from 'axios';

import { tokenManage } from '@/lib';
import type { ICommonObj } from '@/interfaces';

interface IOriginalRes {
  message: string;
  success: boolean;
  data: ICommonObj | unknown;
}
interface IAxiosInstance {
  (config: AxiosRequestConfig): Promise<IOriginalRes>;
}

const env = __ENV__;
const apiHost = __SERVER_API_HOST__;
const apiPort = __SERVER_API_PORT__;

// 提供自定义参数创建 request 实例
export const initRequest = (opts: ICommonObj): IAxiosInstance => {
  // 创建axios实例
  const request = axios.create({
    baseURL: env === 'production' ? `//${apiHost}:${apiPort}` : '',
    // 超时
    timeout: <number>opts?.timeout || 10000,
  });

  axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

  // 请求拦截器
  request.interceptors.request.use(
    config => {
      // 如果有 token ，带上
      if (tokenManage.get()) {
        config.headers['Authorization'] = 'Bearer ' + tokenManage.get(); // 让每个请求携带自定义token 请根据实际情况自行修改
      }

      return config;
    },
    error => {
      Promise.reject(error);
    }
  );

  // 响应拦截器
  request.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
  );

  return request;
};

export default initRequest({
  timeout: 1000 * 60 * 10,
});
