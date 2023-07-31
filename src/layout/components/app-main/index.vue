<script lang="ts">
export { default } from './logic';
</script>

<template>
  <div class="app-main">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.app-main {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
