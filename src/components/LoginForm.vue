<template>
  <div class="login-form">
    <span class="login-title">{{ title }}</span>
    <el-form class="login-area">
      <el-form-item>
        <el-input v-model="account" placeholder="账号" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="password" type="password" placeholder="密码" />
      </el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import Config from '../config'
export default {
  mounted() {
    this.loadAccountFromLocal()
  },
  data() {
    return {
      title: Config.PROJECT_NAME,
      account: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('账号：', this.account)
      console.log('密码：', this.password)
      this.saveAccountToLocal()
      // this.$router.push('/')
    },
    saveAccountToLocal() {
      localStorage.setItem('account', this.account)
      localStorage.setItem('password', this.password)
    },
    loadAccountFromLocal() {
      const account = localStorage.getItem('account')
      const password = localStorage.getItem('password')
      if (account) {
        this.account = account
      }
      if (password) {
        this.password = password
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-area
  width 400px
.login-area
  margin-top 20px
.el-button
  width 100%
.login-title
  font-size 25px
  color #fff
</style>
