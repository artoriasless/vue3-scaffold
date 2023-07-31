<script lang="ts">
export { default } from './logic';
</script>

<template>
  <component v-if="isElIcon && isValidName" class="el-icon" :is="elIconMap[name]" v-bind="$attrs" />
  <svg v-else :class="svgClass" v-bind="$attrs" :style="{ color: color }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
