<template>
  <div
    class="loading"
    v-loading.fullscreen.lock="isLoadingVisible"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.76)"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      isLoadingVisible: false
    }
  },
  watch: {
    '$store.state.isLoadingVisible'(visible) {
      this.isLoadingVisible = visible
    }
  }
}
</script>
<style lang="stylus" scoped>
.loading
  font-size 50px
</style>
