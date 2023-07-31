import { currentEnvConfig } from './constants';

const { HOST, PORT, SERVER_API_HOST, SERVER_API_PORT } = currentEnvConfig;

export default {
  host: HOST,
  port: PORT,
  strictPort: true,
  // open: `http://${HOST}:${PORT}`,
  // 方便本地开发，允许跨域
  cors: true,
  // 接口代理转发
  proxy: {
    '/api': {
      target: `http://${SERVER_API_HOST}:${SERVER_API_PORT}`,
      changeOrigin: true,
    },
    // // 字符串简写写法
    // '/foo': 'http://localhost:4567',
    // // 选项写法
    // '/api': {
    //   target: 'http://jsonplaceholder.typicode.com',
    //   changeOrigin: true,
    //   rewrite: (path) => path.replace(/^\/api/, '')
    // },
    // // 正则表达式写法
    // '^/fallback/.*': {
    //   target: 'http://jsonplaceholder.typicode.com',
    //   changeOrigin: true,
    //   rewrite: (path) => path.replace(/^\/fallback/, '')
    // },
    // // 使用 proxy 实例
    // '/api': {
    //   target: 'http://jsonplaceholder.typicode.com',
    //   changeOrigin: true,
    //   configure: (proxy, options) => {
    //     // proxy 是 'http-proxy' 的实例
    //   }
    // }
  },
};
