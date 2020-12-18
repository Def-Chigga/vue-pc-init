<template>
    <div class="home">
      <router-link tag="button" to="/demo">跳转Demo页面</router-link>
      <router-link tag="button" to="/main">跳转Main页面</router-link>
      <!--路由切换下的router-viewt添加过渡-->
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOut">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
</style>
