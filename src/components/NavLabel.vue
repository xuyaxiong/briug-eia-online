<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in navLabelList" :key="index" :to="{path: item.path}">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  methods: {
    onClick(path) {
      if (this.$route.path !== path) {
        this.$root.replace(path)
      }
    }
  },
  computed: {
    navLabelList() {
      return this.$store.state.navLabelList
    }
  }
}
</script>
