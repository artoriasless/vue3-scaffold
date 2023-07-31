<script lang="ts">
export { default } from './logic';
</script>

<template>
  <div class="profile-page">
    个人中心
    <br />
    {{ userInfo }}
    <br />
    <span @click="logoutHandler">退出登录</span>
  </div>
</template>

<style lang="scss">
.profile-page {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
