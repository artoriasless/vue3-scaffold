export const register_mock = {
  success: false,
  message: '账号已存在，请直接登录，或者换一个账号进行注册',
  data: null,
};

export const login_mock = {
  success: true,
  message: '登录成功',
  // eslint-disable-next-line max-len
  data: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXVpZCI6ImYzNzJiZWZlLTZlNzUtNDVlNC05NTdmLTFiZjhiZThhMDY4NiIsInVzZXJOYW1lIjoiYXJ0b3JpYXNsZXNzIiwibmlja05hbWUiOiJBbm9ueW1vdXNfMjAyM18wN18xNF8yMl81NV8xN182MDUiLCJhdmF0YXIiOiJodHRwczovL2Rhay1hc3NldHMub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2RlZmF1bHQtYXNzZXRzL2F2YXRhci5naWYiLCJyb2xlIjoiY29uc3VtZXIiLCJwaG9uZSI6IiIsInBhc3N3b3JkIjoiMzQzYzc5MWRlZGExMDkwNWU5YzAzYmNjYWViNzU0MTNjOWVlOTYwYWY3YjFmMjI5MWY0YWNjOTkyNWUyMDY1YSIsImVtYWlsIjoiIiwiaXNBY3RpdmUiOmZhbHNlLCJpc0Rpc2FibGVkIjpmYWxzZSwibG9naW5Mb2NrZWRCZ2VpbiI6bnVsbCwid2VjaGF0T3BlbklkIjpudWxsLCJ3ZWNoYXRVbmlvbklkIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMy0wNy0xNFQxNDo1NToxNy4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDctMTRUMTQ6NTU6MTcuMDAwWiIsImlhdCI6MTY5MDc3OTkyN30.KyM_vNIi9bhrf7r7neqjtcOdD9q-T-rmU87kHPWpqVo',
};

export const fetchUserInfo_mock = {
  success: true,
  message: '获取用户信息成功',
  data: {
    uuid: 'f372befe-6e75-45e4-957f-1bf8be8a0686',
    userName: 'artoriasless',
    nickName: 'Anonymous_2023_07_14_22_55_17_605',
    avatar: 'https://dak-assets.oss-cn-beijing.aliyuncs.com/default-assets/avatar.gif',
    role: 'consumer',
    phone: '',
    email: '',
    isActive: false,
  },
};
