import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import App from './App.vue';
import store from './store';
import router from './router';

import permission from './permission';

// 挂载全局
import { utils } from './lib';

// 通用组件
import CommonIcon from '@/components/common-icon/index.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// 样式相关
import 'normalize.css';
import 'element-plus/dist/index.css';
import '@/assets/styles/index.scss'; // global css

const renderPage = () => {
  const app = createApp(App);

  app.use(store);
  app.use(router);

  // UI 库全局注册
  app.use(ElementPlus);

  app.component('CommonIcon', CommonIcon);

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }

  // 注册全局通用实例属性\
  app.config.globalProperties.utils = utils;

  // 渲染到页面
  app.mount('#appContainer');
};

permission();
renderPage();
