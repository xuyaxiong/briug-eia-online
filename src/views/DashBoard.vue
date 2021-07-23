<!--
 * @author: 徐亚雄
 * @date: 2021-07-22 14:46:46
 * @desc: 页面Wrapper
 -->
<template>
  <div class="page">
    <loading />
    <div class="left">
      <Menu />
    </div>
    <div class="right">
      <head-bar v-bind="userInfo"></head-bar>
      <nav-label />
      <router-view />
    </div>
  </div>
</template>

<script>
import HeadBar from '../components/HeadBar.vue'
import Loading from '../components/Loading.vue'
import Menu from '../components/Menu.vue'
import NavLabel from '../components/NavLabel.vue'
export default {
  components: {
    HeadBar,
    Menu,
    Loading,
    NavLabel
  },
  data() {
    return {
      userInfo: { avatar: '', userName: '徐亚雄' }
    }
  },
  mounted() {
    console.log('current.route =', this.$route)
  }
}
</script>

<style lang="stylus" scoped>
.page
  display flex

.left
  width 250px

.right
  width 100%
</style>
