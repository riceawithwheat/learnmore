<template>
    <nav class="container-fluid navbar navbar-dark bg-primary bg-gradient bg-opacity-55 justify-content-between mb-4 px-4">
      <div class="container">
        <router-link class="navbar-brand" to="/">learnMore博客</router-link>
        <ul v-if = "!user.isLogin" class="list-inline mb-0">
            <!-- 给登录和注册加上btn样式 -->
            <li class="list-inline-item mx-2"><router-link to="/" class="btn btn-primary my-2" style="width: 100px;">首页</router-link></li>
            <li class="list-inline-item mx-2"><router-link to="/miss" class="btn btn-primary my-2" style="width: 100px;">文章归档</router-link></li>
            <li class="list-inline-item mx-2"><router-link to="/miss" class="btn btn-primary my-2" style="width: 100px;">说说</router-link></li>
            <li class="list-inline-item mx-2"><router-link to="/board" class="btn btn-primary my-2" style="width: 100px;">留言板</router-link></li>
            <li class="list-inline-item mx-2"><router-link to="/miss" class="btn btn-primary my-2" style="width: 100px;">网页导航</router-link></li>
            <li class="list-inline-item mx-2"><router-link to="/login" class="btn btn-primary my-2" style="width: 100px;">登陆</router-link></li>
            <li class="list-inline-item mx-2"><router-link to="/signup" class="btn btn-primary my-2" style="width: 100px;">注册</router-link></li>
          </ul>
        <ul v-else class="list-inline mb-0">
          <li class="list-inline-item mx-2"><router-link to="/" class="btn btn-primary my-2" style="width: 100px;">首页</router-link></li>
            <li class="list-inline-item mx-2"><router-link to="miss/" class="btn btn-primary my-2" style="width: 100px;">文章归档</router-link></li>
            <li class="list-inline-item mx-2"><router-link to="/miss" class="btn btn-primary my-2" style="width: 100px;">说说</router-link></li>
            <li class="list-inline-item mx-2"><router-link to="/board" class="btn btn-primary my-2" style="width: 100px;">留言板</router-link></li>
            <li class="list-inline-item mx-2"><router-link to="/miss" class="btn btn-primary my-2" style="width: 100px;">网页导航</router-link></li>
            <li class="list-inline-item">
              <!-- <pre>{{ user }}</pre> -->
             <dropdown :title="`你好，${user.name}`">
               <dropdown-item><router-link to="/create" class="dropdown-item">新建文章</router-link></dropdown-item>
               <dropdown-item><router-link :to="`/column/${user.columnId}`" class="dropdown-item">我的专栏</router-link></dropdown-item>
               <dropdown-item><router-link to="/mine" class="dropdown-item">编辑资料</router-link></dropdown-item>
               <dropdown-item><router-link to="/" class="dropdown-item" @click.prevent = 'handleLogin'>退出登录</router-link></dropdown-item>
              </dropdown>
            </li>
        </ul>
      </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import store, { UserProps } from '../store'

export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
      default: store.state.user
    }
  },
  // 这里本来有个props
  setup () {
    const handleLogin = () => {
      store.commit('logout')
    }
    // watch(() => props.user.isLogin, () => {
    //   return props.user.isLogin
    // }
    // )
    // console.log(props.user.isLogin)
    return {
      handleLogin
    }
  }
})
</script>
<style scoped>
nav{
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
li{
  border: none !important;
}
</style>
