import type { ICommonRes } from '@/interfaces';

export interface ILoginJsonData {
  account?: string;
  password?: string;
  mobile?: string;
  code?: string;
  formType?: string;
  accountType?: string;
}

export interface ILoginRes extends ICommonRes {
  // 登录成功后返回 token
  data: string;
}

export type IRegisterJsonData = ILoginJsonData;

export interface IRegisterRes extends ICommonRes {
  // 注册成功后返回 token
  data: string;
}

export interface IUserInfo {
  uuid: string;
  userName: string;
  nickName: string;
  avatar: string;
  role: string;
  phone: string;
  email: string;
  isActive: boolean;
}

export interface IFetchUserInfoRes extends ICommonRes {
  data: IUserInfo;
}
