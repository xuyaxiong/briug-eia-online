<template>
  <el-form label-position="right" label-width="80px" :model="formLabelAlign">
    <el-form-item label="编号">
      <el-input v-model="user.id"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="user.name"></el-input>
    </el-form-item>
    <el-form-item label="生日">
      <el-input v-model="user.birthday"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addUser(user)">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: '',
        name: '',
        birthday: ''
      }
    }
  },
  methods: {
    mounted() {},
    async addUser(user) {
      console.log('user =', user)
      // const result = await this.request('test', 'test params')
      // console.log('result =', result)
    }
  }
}
</script>
