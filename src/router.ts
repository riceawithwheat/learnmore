import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import ColumnDetail from './views/ColumnDetail.vue'
import CreatePost from './views/CreatePost.vue'
import axios from 'axios'
import store from './store'
import PostDetail from './views/PostDetail.vue'
import createColumn from './views/createColumn.vue'
import mine from './components/mine.vue'
import Boardmsg from './views/Boardmsg.vue'
import navigation from './views/navigation.vue'
import missView from './views/missView.vue'
const routerHistory = createWebHashHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '主页'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        redirectAlreadyLogin: true,
        title: '登录'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: {
        redirectAlreadyLogin: true,
        title: '注册账号'
      }
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePost,
      meta: {
        requiredLogin: true,
        title: '创建文章'
      }
    },
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail,
      meta: {
        title: '专栏详情'
      }
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: PostDetail,
      meta: {
        title: '文章详情'
      }
    },
    {
      path: '/createColumn',
      name: 'createColumn',
      component: createColumn,
      meta: {
        title: '创建专栏'
      }
    },
    {
      path: '/board',
      name: 'Boardmsg',
      component: Boardmsg,
      meta: {
        title: '留言板'
      }
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: navigation,
      meta: {
        title: '网页导航'
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta: {
        title: '我的'
      }
    },
    {
      path: '/miss',
      name: 'missView',
      component: missView,
      meta: {
        title: '尚在开发中'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  const { user, token } = store.state
  const { requiredLogin, redirectAlreadyLogin } = to.meta
  if (!user.isLogin) {
    if (token) {
      axios.defaults.headers.token = `${token}`
      store.dispatch('fetchCurrentUser').then(data => {
        const message = data.msg
        if (redirectAlreadyLogin && message === 'ok') {
          next('/')
        } else {
          next()
        }
      }).catch(e => {
        console.error(e)
        store.commit('logout')
        next('login')
      })
    } else {
      if (requiredLogin) {
        console.log(213)
        next('login')
      } else {
        next()
      }
    }
  } else {
    if (redirectAlreadyLogin) {
      next('/')
    } else {
      next()
    }
  }
})
export default router
