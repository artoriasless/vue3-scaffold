import Cookies from 'js-cookie';

const tokenKey = __TOKEN_KEY__;

export const getToken = (): string => String(Cookies.get(tokenKey) || '');

export const setToken = (token: string): void => {
  Cookies.set(tokenKey, token);
};

export const removeToken = (): void => {
  Cookies.remove(tokenKey);
};

export default {
  get: getToken,
  set: setToken,
  remove: removeToken,
};
