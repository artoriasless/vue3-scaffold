<script lang="ts">
export { default } from './logic';
</script>

<template>
  <div class="home-page">
    <div class="logo-wrap">
      <img src="@/assets/logo.png" alt="logo" />

      <div class="quick-link-wrap">
        <router-link class="quick-link-item" to="/profile">
          <common-icon name="UserFilled" />
        </router-link>
      </div>
    </div>
    <div class="horizon-line"></div>
    <div class="tips-wrap">
      停一会，歇一会 &nbsp;
      <common-icon name="horse" />
    </div>
  </div>
</template>

<style lang="scss">
.home-page {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.logo-wrap {
  position: relative;
  display: flex;
  max-width: 50vw;
  max-height: 50vh;
  align-items: center;
  justify-content: center;

  > img {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    padding: 0;
    margin: 0;
  }
}

.quick-link-wrap {
  position: absolute;
  width: 32px;
  height: 100%;
  right: -70px;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &:before {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: #ddd;
    left: -20px;
    top: 0;
  }

  .quick-link-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #73767a;
    width: 32px;
    height: 32px;
    font-size: 1.25rem;

    &:active,
    &:focus {
      color: #73767a;
    }

    &:hover {
      color: #337ecc;
    }
  }
}

.horizon-line {
  position: relative;
  width: 60vw;
  height: 1px;
  background-color: #ddd;
}

.tips-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 0.75em;
  color: #aaa;
}
</style>
