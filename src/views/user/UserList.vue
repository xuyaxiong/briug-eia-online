<template>
  <div>用户列表</div>
  <el-button @click="jumpToAddUser">添加用户</el-button>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    jumpToAddUser() {
      this.$router.push({ name: 'AddUser' })
    }
  }
}
</script>
