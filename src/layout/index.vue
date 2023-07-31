<script lang="ts">
export { default } from './logic';
</script>

<template>
  <el-container class="app-container">
    <el-header class="app-header-container">
      <app-header />
    </el-header>
    <el-main class="app-main-container">
      <app-main />
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.app-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;

  .app-header-container {
    position: relative;
    height: 32px;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  .app-main-container {
    position: relative;
    flex-grow: 1;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
}
</style>
