import dayjs from 'dayjs';

export default {
  BASE_URL: '/',

  HOST: '127.0.0.1',
  PORT: 9527,

  // 服务端接口
  // 生产环境下，通过统一配置 request 的 baseURL 来实现
  SERVER_API_HOST: 'dak.artoriasless.cn',
  SERVER_API_PORT: 80,

  // 页面标题
  APP_TITLE: 'vue3 scaffold application',

  // 应用标识
  APP_KEY: 'vue3_scaffold_application',

  // 开发环境配置
  ENV: 'production',

  // copyright
  COPYRIGHT: `Copyright © 2023-${dayjs().format('YYYY')}  Artoriasless All Rights Reserved.`,
};
