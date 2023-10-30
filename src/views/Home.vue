<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home-page container mt-1">
      <div class="mx-3 container row">
        <el-carousel height="40px"
          direction="vertical" indicator-position="none"
          class="col-11">
          <el-carousel-item v-for="item in message" :key="item">
            <el-icon color="blue" style="vertical-align: middle;" size="20"><Bell /></el-icon>
            <el-text class="mx-1 text-secondary" style="line-height: 40px;">{{item.message}}</el-text>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="block text-center py-1 mx-4 row container">
        <el-carousel class="col-8 swiper" height="500px">
          <el-carousel-item v-for="item in images" :key="item" style="border-radius: 5px;">
            <img :src=item.message alt="">
          </el-carousel-item>
        </el-carousel>
        <div class="col-3 p-0 mx-3 container" style="box-shadow: #475669 2px 4px 6px; border-radius: 5px;">
          <div style="padding: 0;">
            <weather-view></weather-view>
            <div class="box-swiper mt-4" style="background-color: aqua; box-shadow: #475669 2px 4px 6px; height: 318px;">
            </div>
          </div>
        </div>
      </div>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <img src="../assets/column.jpg" alt="callout" class="w-75"/>
            <weather-view></weather-view>
            <h2 class="font-weight-light">随心写作，自由表达</h2>
            <p>
              <router-link to="/create" class="btn text-white my-2 bg-gradient-primary">开始写文章</router-link>
            </p>
          </div>
        </div>
      </section>
      <h4 class="font-weight-bold text-center ">发现精彩</h4>
      <column-list :list="list"></column-list>
      <!-- <div class="text-center mx-auto my-2 btn-block">
        <router-link to="/createColumn" class="btn btn-primary bg-gradient-primary">创建我的专栏</router-link>
      </div> -->
      <button
        class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25 d-block bg-gradient-primary"
         @click="loadMorePage" v-if="!isLastPage" style="color: aliceblue;"
      >
        加载更多
      </button>
    </div>
    <!-- <test-view></test-view> -->
  </template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref } from 'vue'
import { GlobalDataProps } from '../store'
import { useStore } from 'vuex'
import useLoadMore from '../hooks/useLoadMore'
import ColumnList from '../components/ColumnList.vue'
import weatherView from '../components/weatherView.vue'
import { ElCarousel, ElText } from 'element-plus'
// import Boardmsg from '../views/Boardmsg.vue'
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    ColumnList,
    weatherView,
    ElCarousel,
    ElText
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const total = computed(() => store.state.columns.total)
    const current = computed(() => store.state.columns.current)
    interface messageData {
      message: string
    }
    const message: messageData[] = [
      {
        message: '重要公告：我们的页面现已全面升级，更多精彩等你来发现！'
      },
      {
        message: '关注我们的页面，每天都有新的内容更新！'
      },
      {
        message: '我们正在进行一次前所未有的优化升级，关注我们，一起见证改变！'
      }
    ]
    const images: messageData[] = [
      {
        message: require('@/assets/swiper1.jpg')
      },
      {
        message: require('@/assets/swiper2.jpg')
      },
      {
        message: require('@/assets/swiper3.jpg')
      }
    ]
    onMounted(() => {
      store.dispatch('fetchColumns')
    })
    const list = computed(() => store.getters.getColumns)
    // store.dispatch('fetchColumn')
    // store.dispatch('fetchmyPosts')
    // console.log(list)
    const { loadMorePage, isLastPage } = useLoadMore('fetchColumns', total, { size: '3', current: (current.value ? current.value + 1 : '2') })
    return {
      list,
      loadMorePage,
      isLastPage,
      message,
      images
    }
  }
})
</script>
<style scoped>
.bg-gradient-primary {
  background-image: linear-gradient(45deg, #0099FF, #0c69d2);

}
.demonstration {
  color: var(--el-text-color-secondary);
}
.swiper{
  box-shadow: #475669 2px 4px 6px;
  padding: 0;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
.box-swiper{
  background-image: url('@/assets/2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
