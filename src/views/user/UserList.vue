<template>
  <el-table class="user-list" :data="users">
    <el-table-column
      prop="id"
      label="编号"
      header-align="center"
      align="center"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      header-align="center"
      align="center"
    >
    </el-table-column>
    <el-table-column
      prop="birthday"
      label="生日"
      header-align="center"
      align="center"
    >
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template #default="scope">
        <el-button @click="userDetail(scope.row)" type="text" size="small"
          >查看</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    class="pagination"
    background
    layout="prev, pager, next"
    :current-page="pageInfo.currentPage"
    :page-size="pageInfo.pageSize"
    :total="pageInfo.total"
    @current-change="queryUserList"
  >
  </el-pagination>
  <el-button class="add-user" @click="jumpToAddUser">添加用户</el-button>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      pageInfo: {
        currentPage: 0,
        pageSize: 10,
        total: 0
      }
    }
  },
  mounted() {
    this.queryUserList(1).then(() => {
      console.log('done')
    })
  },
  methods: {
    jumpToAddUser() {
      this.$router.push({ name: 'AddUser' })
    },
    // TODO 查询用户列表
    async queryUserList(page) {
      console.log('page =', page)
      const result = await this.fakeUsers(page, this.pageInfo.pageSize)
      const { users, pageInfo } = result
      this.users = users
      this.pageInfo = pageInfo
    },
    fakeUsers(page, limit) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const users = [...Array(limit)].map((_, index) => {
            return {
              id: index + 1 + (page - 1) * limit,
              name: 'foo',
              birthday: 'bar'
            }
          })
          resolve({
            users,
            pageInfo: {
              currentPage: page,
              pageSize: limit,
              total: 1000
            }
          })
        }, 100)
      })
    },
    // 查看用户详情
    userDetail(row) {
      this.$router.push({ name: 'UserDetail', params: { id: row.id } })
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-list
  width 100%
.pagination
  float left
.add-user
  float right
</style>
