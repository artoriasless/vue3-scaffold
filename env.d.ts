/// <reference types="vite/client" />

// 全局变量，一般在构建的时候定义好，具体参考 vite 配置项的 constants 和 define 中
declare const __ENV__: string;
declare const __BASE_URL__: string;
declare const __APP_TITLE__: string;
declare const __APP_KEY__: string;
declare const __ASSET_DIR_PREFIX__: string;
declare const __REMOTE_ASSETS_DOMAIN__: string;
declare const __APP_BASE_API__: string;

declare interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
