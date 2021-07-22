<template>
  <el-button @click="addUser">添加用户</el-button>
</template>

<script>
// import { addUser } from '@/api/user'
export default {
  data() {
    return {}
  },
  methods: {
    async addUser() {
      // this.$store.commit('toggleLoading', true)
      // const result = await addUser()
      // this.$store.commit('toggleLoading', false)
      // console.log('result =', result)
      // console.log('message =', this.$message)
      // this.$message({
      //   showClose: true,
      //   message: result.msg,
      //   type: 'success'
      // })
      const result = await this.request('test', 'test params')
      console.log('result =', result)
    }
  }
}
</script>
