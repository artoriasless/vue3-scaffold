import dayjs from 'dayjs';

export default {
  BASE_URL: '/',

  // dev-server
  HOST: '127.0.0.1',
  PORT: 9527,

  // 服务端接口
  SERVER_API_HOST: '127.0.0.1',
  SERVER_API_PORT: 7001,

  // 页面标题
  APP_TITLE: 'vue3 scaffold application',

  // 应用标识
  APP_KEY: 'vue3_scaffold_application',

  // 开发环境配置
  ENV: 'staging',

  // copyright
  COPYRIGHT: `Copyright © 2023-${dayjs().format('YYYY')}  Artoriasless All Rights Reserved.`,
};
