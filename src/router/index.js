import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import Login from '../views/Login.vue'
import DashBoard from '../views/DashBoard.vue'

import UserDetail from '../views/user/UserDetail.vue'
import AddUser from '../views/user/AddUser.vue'
import UserList from '../views/user/UserList.vue'

import MenuDetail from '../views/menu/MenuDetail.vue'
import AddMenu from '../views/menu/AddMenu.vue'
import MenuList from '../views/menu/MenuList.vue'

const routes = [
  {
    path: '/',
    redirect: 'Login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard,
    children: [
      {
        path: 'user',
        component: UserList,
        name: 'UserList',
        meta: { menuIndex: '1-1', name: '用户列表' }
      },
      {
        path: 'user/add',
        component: AddUser,
        name: 'AddUser',
        meta: { menuIndex: '1-2', name: '添加用户' }
      },
      {
        path: 'user/:id',
        component: UserDetail,
        name: 'UserDetail',
        meta: { menuIndex: '1-3', name: '用户详情' }
      },
      {
        path: 'menu',
        component: MenuList,
        name: 'MenuList',
        meta: { menuIndex: '2-1', name: '菜单列表' }
      },
      {
        path: 'menu/add',
        component: AddMenu,
        name: 'AddMenu',
        meta: { menuIndex: '2-2', name: '添加菜单' }
      },
      {
        path: 'menu/:id',
        component: MenuDetail,
        name: 'MenuDetail',
        meta: { menuIndex: '2-3', name: '菜单详情' }
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: 'Login'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  store.commit('setNavLabelList', [{ path: to.path, name: to.meta.name }])
})

export default router
