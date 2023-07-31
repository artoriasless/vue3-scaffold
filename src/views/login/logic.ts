import { ElLoading, ElMessage, ElMessageBox } from 'element-plus';

import { authService } from '@/service';
import { defaultLoadingOpts } from '@/constants';
import type { ILogicModule } from '@/interfaces';
import store from '@/store';
import { tokenManage } from '@/lib';
import { SYNC_ACTIONS as globalSyncActions } from '@/store/constants';

import type { IFormType } from './interfaces';
import { codeExpiredSeconds } from './constants';

const logicModule: ILogicModule = {
  name: 'LoginPage',
  data() {
    return {
      formData: {
        account: '',
        password: '',
        mobile: '',
        code: '',
        formType: <IFormType>'account',
        accountType: '',
      },
      codeExpiredSeconds,
      fetchCodeCountdownSeconds: 0,

      pageLoaded: false,
    };
  },
  computed: {
    // 是否节流验证码获取，超过了一分钟就可以再次获取
    isFetchCodeThrottle() {
      return this.fetchCodeCountdownSeconds > 0;
    },
    // 获取验证码倒计时，限定在一分钟内只能发送一次
    fetchCodeCountdownText() {
      return `${this.fetchCodeCountdownSeconds}秒后重试`;
    },
    // 不允许自动注册
    disAllowRegister() {
      if (this.formData.formType === 'account') {
        // 账号必须均非空
        if (this.formData.account?.trim() && this.formData.password?.trim()) {
          return false;
        }

        return true;
      } else if (this.formData.formType === 'mobile') {
        // 手机号、验证码必须均非空
        if (this.formData.mobile?.trim() && this.formData.code?.trim()) {
          return false;
        }

        return true;
      }

      return true;
    },
    // 不允许登录
    disAllowLogin() {
      if (this.formData.formType === 'account') {
        // 账号密码必须均非空
        if (this.formData.account?.trim() && this.formData.password?.trim()) {
          return false;
        }

        return true;
      } else if (this.formData.formType === 'mobile') {
        // 手机号、验证码必须均非空
        if (this.formData.mobile?.trim() && this.formData.code?.trim()) {
          return false;
        }

        return true;
      }

      return true;
    },
  },
  methods: {
    // 登录表单的校验
    validateForm(): Error | null {
      const mobileReg = /^1[3456789]\d{9}$/;
      const emailReg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/;
      const accountValReg = /^[a-zA-Z0-9]{10,18}$/;
      const passwordReg = /^[^\s]{10,18}$/;
      // const codeReg = /^\s*\d{6}\s*$/;

      switch (this.formData.formType) {
        case 'account':
          // 校验是否是手机号
          if (mobileReg.test(this.formData.account)) {
            // 校验密码是否合法
            if (!passwordReg.test(this.formData.password)) {
              return new Error('密码长度为 10 - 18 ，前后不能包含空格');
            }

            this.formData.accountType = 'mobile';

            return null;
          }

          // 校验是否是邮箱
          if (emailReg.test(this.formData.account)) {
            // 校验密码是否合法
            if (!passwordReg.test(this.formData.password)) {
              return new Error('密码长度为 10 - 18 ，前后不能包含空格');
            }

            this.formData.accountType = 'email';

            return null;
          }

          // 校验是否是长度为 10 - 18 的账号名
          if (accountValReg.test(this.formData.account)) {
            // 校验密码是否合法
            if (!passwordReg.test(this.formData.password)) {
              return new Error('密码长度为 10 - 18 ，前后不能包含空格');
            }

            this.formData.accountType = 'account';

            return null;
          } else {
            return new Error('请输入正确的手机号、邮箱或者账号名，账号名长度为 10 - 18');
          }

        case 'mobile':
          // // 校验手机号是否合法
          // if (mobileReg.test(this.formData.mobile)) {
          // // 校验密码是否合法
          //   if (!codeReg.test(this.formData.code)) {
          //     return new Error('请输入正确的 6 位数字验证码');
          //   }
          //   this.formData.accountType = 'mobile';
          //   return null;
          // } else {
          //   return new Error('请输入正确的手机号码');
          // }
          // TODO，现阶段还不支持手机号验证码登录
          return new Error('暂不支持手机号验证码登录和注册');

        default:
          return new Error('未知的表单类型');
      }
    },
    fetchCode() {
      // TODO，现阶段还不支持手机号验证码登录
      ElMessage.error('暂不支持手机号验证码登录和注册，获取验证码失败');

      // // 更新验证码时间戳
      // this.fetchCodeCountdownSeconds = this.codeExpiredSeconds;

      // // 开始倒计时
      // const countdown = setInterval(() => {
      //   this.fetchCodeCountdownSeconds -= 1;

      //   if (this.fetchCodeCountdownSeconds <= 0) {
      //     clearInterval(countdown);
      //   }
      // }, 1000);
    },
    registerHandler() {
      const validateError = this.validateForm();

      // 校验失败，直接返回
      if (validateError) {
        ElMessage.error(validateError.message);

        return;
      }

      // loading 遮罩
      const loadingInstance = ElLoading.service(defaultLoadingOpts);

      authService
        .register(this.formData)
        .then(res => {
          if (res.success) {
            ElMessage.success(res.message);

            store.commit(globalSyncActions.UPDATE_TOKEN, res.data);

            // 注册成功，跳转到首页，如果有 redirect 参数，则跳转到 redirect
            this.$router.push({
              path: this.$route.query.redirect || '/home',
            });
          } else {
            ElMessage.error(res.message);
          }
        })
        .catch(ElMessageBox.alert)
        .finally(() => {
          loadingInstance.close();
        });
    },
    loginHandler() {
      const validateError = this.validateForm();

      // 校验失败，直接返回
      if (validateError) {
        ElMessage.error(validateError.message);

        return;
      }

      // loading 遮罩
      const loadingInstance = ElLoading.service(defaultLoadingOpts);

      authService
        .login(this.formData)
        .then(res => {
          if (res.success) {
            ElMessage.success(res.message);

            store.commit(globalSyncActions.UPDATE_TOKEN, res.data);

            // 登录成功，跳转到首页，如果有 redirect 参数，则跳转到 redirect
            this.$router.push({
              path: this.$route.query.redirect || '/home',
            });
          } else {
            ElMessage.error(res.message);
          }
        })
        .catch(ElMessageBox.alert)
        .finally(() => {
          loadingInstance.close();
        });
    },
    goHomePage() {
      this.$router.push('/');
    },
  },
  created() {
    // 页面组件刚刚创建的时候，根据 token 判断是否已经登录
    const hasToken = !!tokenManage.get()?.trim();

    if (hasToken) {
      this.$router?.push({
        path: <string>this.$route?.query.redirect || '/home',
      });

      return;
    }

    this.pageLoaded = true;
  },
};

export default logicModule;
