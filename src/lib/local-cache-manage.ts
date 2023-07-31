import type { ICommonObj } from '@/interfaces';

// 基于 localStorage 的一些方法
export const getCache = (cacheKey: string): number | boolean | string | ICommonObj | unknown => {
  if (!localStorage || typeof localStorage.getItem !== 'function') {
    return null;
  }

  const data = localStorage.getItem(cacheKey);

  try {
    if (data === null) throw new Error('null data');

    return JSON.parse(data);
  } catch (err) {
    // 解析报错，使用默认返回 null
    return null;
  }
};

export const setCache = (cacheKey: string, data: number | boolean | string | ICommonObj | unknown): void => {
  if (!localStorage || typeof localStorage.setItem !== 'function') {
    return;
  }

  localStorage.setItem(cacheKey, JSON.stringify(data));
};

export const removeCache = (cacheKey: string): void => {
  if (!localStorage || typeof localStorage.removeItem !== 'function') {
    return;
  }

  localStorage.removeItem(cacheKey);
};

export default {
  get: getCache,
  set: setCache,
  remove: removeCache,
};
