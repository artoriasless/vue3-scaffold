<script lang="ts">
export { default } from './logic';
</script>

<template>
  <div class="login-page" v-show="pageLoaded">
    <div class="login-page-bg-mask" />

    <el-form class="form-data-wrap" @submit.prevent>
      <el-tabs stretch v-model="formData.formType" class="form-wrap">
        <el-tab-pane label="账号密码" name="account">
          <el-form-item>
            <el-input v-model="formData.account" placeholder="手机号/邮箱/账号" prefix-icon="UserFilled" />
          </el-form-item>

          <el-form-item>
            <el-input v-model="formData.password" type="password" placeholder="密码" prefix-icon="Lock" />
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="验证码登录" name="mobile">
          <el-form-item>
            <el-input v-model="formData.mobile" placeholder="手机号" prefix-icon="PhoneFilled" />
          </el-form-item>

          <el-form-item class="phone-code-wrap">
            <div class="input-wrap">
              <el-input v-model="formData.code" placeholder="验证码" prefix-icon="Key" />
            </div>
            <div class="fetch-code-wrap">
              <el-button v-if="isFetchCodeThrottle" disabled type="info">
                {{ fetchCodeCountdownText }}
              </el-button>

              <el-button v-else type="primary" @click="fetchCode"> 获取验证码 </el-button>
            </div>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>

      <div class="register-link-wrap operate-link-wrap">
        <el-link
          :underline="false"
          :disabled="disAllowRegister"
          class="register-link operate-link"
          @click="registerHandler"
        >
          还没有账号？立即注册
        </el-link>
      </div>

      <div class="login-link-wrap operate-link-wrap">
        <el-link :underline="false" :disabled="disAllowLogin" class="login-link operate-link" @click="loginHandler">
          登录
        </el-link>
      </div>
    </el-form>

    <div class="home-page-link-wrap" @click="goHomePage">
      <common-icon name="HomeFilled" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(@/assets/login-page-bg.jpg) no-repeat center center / cover;
}

.login-page-bg-mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.75);
  z-index: 1;
}

.form-data-wrap {
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 50%;
  top: 50%;
  width: 90vw;
  max-width: 400px !important;
  max-height: 256px !important;
  height: 50vh;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #fff;
  z-index: 2;
  box-shadow: #eee 0px 0px 10px;
  overflow: hidden;

  :deep(.el-tabs__item) {
    font-weight: bold;
    font-size: 0.75rem;
  }

  :deep(.el-tab-pane) {
    width: 100%;
    padding: 0 10px;
  }

  :deep(.form-wrap) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  :deep(.form-wrap .el-tabs__content) {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .phone-code-wrap {
    :deep(.el-form-item__content) {
      justify-content: space-between;
    }

    .fetch-code-wrap {
      float: right;
    }
  }

  .operate-link-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    font-size: 1rem;

    .operate-link {
      color: #fff;
      width: 100%;
      height: 100%;
      font-size: 0.7rem;
    }
  }

  .register-link-wrap {
    background-color: #e6a23c;

    .is-disabled {
      background-color: #f3d19e;
    }
  }

  .login-link-wrap {
    margin-top: 8px;
    background-color: #409eff;

    .is-disabled {
      background-color: #a0cfff;
    }
  }
}

@media (min-width: 375px) {
  //>=375的设备
  .form-data-wrap {
    width: 80vw;
    height: 50vh;
  }
}
@media (min-width: 768px) {
  //>=768的设备
  .form-data-wrap {
    width: 70vw;
    height: 50vh;
  }
}
@media (min-width: 992px) {
  //>=992的设备
  .form-data-wrap {
    width: 60vw;
    height: 50vh;
  }
}
@media (min-width: 1200) {
  //>=1200的设备
  .form-data-wrap {
    width: 50vw;
    height: 50vh;
  }
}

.home-page-link-wrap {
  position: fixed;
  display: flex;
  width: 40px;
  height: 40px;
  right: 5px;
  bottom: 5px;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  border-radius: 50%;
  background-color: #409eff;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
  user-select: none;
}
</style>
