<!--
 * @author: 徐亚雄
 * @date: 2021-07-21 15:55:43
 * @desc: 登录
 -->
<template>
  <div class="login-page">
    <el-image class="login-logo" :src="require('@/assets/logo.png')" />
    <login-form class="login-form" />
  </div>
</template>
<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  components: { LoginForm },
  data() {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
.login-page
  display flex
  justify-content center
  align-items flex-start
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background: url(../assets/login_bg.png) top left no-repeat
.login-logo
  position absolute
  top 50px
  left 50px
  width 100px
  height 100px
.login-form
  margin-top calc(30vh)
</style>
