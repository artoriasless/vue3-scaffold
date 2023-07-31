import type { Router, RouteLocation } from 'vue-router';

// 通用 object 类型
export interface ICommonObj {
  [key: string]: ICommonObj | unknown;
}

export interface ICommonRes {
  success: boolean;
  message: string;
  errorCode?: string;
  totalCount?: number;

  data: ICommonObj | Array<unknown> | unknown;
}

// 因为从 .vue 组件中分离了 script 逻辑，需要手动声明一下类型，避免 ts 的提示错误
export interface ILogicModule {
  // 使用了 vue-router ，挂载了 $router 属性
  // 整个页面的 router 实例，包含跳转等实例方法
  $router?: Router;
  // 当前页面的路由信息，里面包含 name 、 query 等信息
  $route?: RouteLocation;
  // 其他的属性
  data?: () => ICommonObj;
  mounted?: () => any; // eslint-disable-line @typescript-eslint/no-explicit-any
  computed?: {
    [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  };
  props?:
    | Array<string>
    | {
        [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
      };
  methods?: {
    [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  };
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

// 针对 element-plus 的一些内置类型（没有导出）
export interface IElLoading {
  setText: (text: string) => void;
  removeElLoadingChild: () => void;
  close: () => void;
  handleAfterLeave: () => void;
  $el: HTMLElement;
}
