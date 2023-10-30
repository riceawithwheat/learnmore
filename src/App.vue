<template>
  <global-header :user="currentUser"></global-header>

    <!-- <loader v-if="isLoading" background="rgba(0,0,0,0.8 )" ></loader> -->
    <router-view></router-view>
    <el-backtop :right="50" :bottom="100"  />
  <div class="container-fluid">
  <footer class="text-center py-4 text-secondary  mt-6 ">
    <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 学罔learnMore</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
  </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { useStore } from 'vuex'
import GlobalHeader from './components/GlobalHeader.vue'
import { GlobalDataProps } from './store'
import createMessage from './components/createMessage'
import { ElBacktop } from 'element-plus'
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    ElBacktop
    // Loader
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => store.state.user)
    const isLoading = computed(() => store.state.loading)
    const error = computed(() => store.state.error)
    watch(() => error.value.status, () => {
      const { status, message } = error.value
      if (status && message) {
        createMessage(message, 'error', 2000)
      }
    })
    return {
      currentUser,
      isLoading,
      error
    }
  }
})
</script>
<style>
footer {
  background-color: rgba(200, 200, 200, 0.4);
}
</style>
