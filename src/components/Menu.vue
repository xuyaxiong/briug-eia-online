<!--
 * @author: 徐亚雄
 * @date: 2021-07-21 17:10:18
 * @desc: 菜单
 -->

<template>
  <el-menu router="true">
    <el-submenu v-for="(menu, index) in menus" :key="index" :index="menu.index">
      <template #title>
        <i :class="menu.icon"></i>
        <span>{{ menu.name }}</span>
      </template>
      <el-menu-item
        v-for="(subMenu, subIndex) in menu.subMenus"
        :key="subIndex"
        :index="subMenu.index"
        :route="subMenu.route"
        >{{ subMenu.name }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: '用户管理',
          index: '1',
          icon: 'el-icon-location',
          subMenus: [
            {
              name: '用户列表',
              index: '1-1',
              route: '/dashboard/user'
            },
            {
              name: '添加用户',
              index: '1-2',
              route: '/dashboard/user/add'
            }
          ]
        },
        {
          name: '菜单管理',
          index: '2',
          icon: 'el-icon-location',
          subMenus: [
            {
              name: '菜单列表',
              index: '2-1',
              route: '/dashboard/menu'
            },
            {
              name: '添加菜单',
              index: '2-2',
              route: '/dashboard/menu/add'
            }
          ]
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="stylus" scoped></style>
