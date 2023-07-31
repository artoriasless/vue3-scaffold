import type { RouteLocation } from 'vue-router';

import type { ILogicModule } from '@/interfaces';

// 默认的系统应用 title
const appTitle = __APP_TITLE__;

const logicModule: ILogicModule = {
  name: 'App',
  watch: {
    $route: {
      handler: function (route: RouteLocation) {
        // 路由地址发生变化，更新页面 title
        document.title = <string>route?.meta?.title || appTitle;
      },
      immediate: true,
    },
  },
  created() {
    // 根据路由，设置默认的 title
    document.title = appTitle;
  },
};

export default logicModule;
