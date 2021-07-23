<!--
 * @author: 徐亚雄
 * @date: 2021-07-21 16:02:18
 * @desc: 页头
 -->

<template>
  <div class="head-bar">
    <h1 class="title">{{ title }}</h1>
    <div class="user-area">
      <el-image class="avatar" :src="avatar" />
      <span class="user-name">{{ userName }}</span>
    </div>
  </div>
</template>

<script>
import Config from '../config'
export default {
  props: {
    avatar: {
      default: require('@/assets/logo.png')
    },
    userName: {
      type: String
    }
  },
  data() {
    return {
      title: Config.PROJECT_NAME
    }
  },
  mounted() {
    console.log('avatar url:', this.avatar)
  }
}
</script>

<style lang="stylus" scoped>
.head-bar
  height 60px
  display flex
  justify-content center
  align-items center
  background-color #438eb9
.user-area
  display flex
  align-items center
  position fixed
  right 30px
.avatar
  width 50px
  height 50px
  margin-right 10px
.title, .user-name
  color white
</style>
