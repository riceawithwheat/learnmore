<template>
    <div class="card text-center container p-0
    shadow mb-3 bg-white rounded col-8"
    v-for="(item, i) in datas" :key="i">
    <div >
        <div class="card-header bg-primary text-white fs-4 fw-light" style="line-height: 40px;">
        {{ item.title }}
    </div>
    <div class="card-body col-md-4 mr-3" style="display: inline-block;" v-for="(content, c) in item.data" :key="c">
        <img :src="content.url" class="img-thumbnail" style="border-radius: 100%; width: 50px; height: 50px;" alt="...">
        <h5 class="card-title text-dark my-2">{{ content.name }}</h5>
        <p class="card-text text-muted fs-6 lh-base my-2">{{ content.description }}</p>
        <a :href="content.link" class="btn btn-primary btn-sm" style="font-size: xx-small;">链接直达</a>
    </div>
    </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'navigationView',
  setup () {
    interface LinkData {
        url: string,
        name: string,
        description: string,
        link: string
    }
    interface AllLink {
        title: string,
        data: LinkData[]
    }
    const datas: AllLink[] = [
      {
        title: '常用推荐',
        data: [
          {
            url: require('@/assets/博客园.png'),
            name: '博客园',
            description: '开发者的网上家园',
            link: 'https://www.cnblogs.com/'
          },
          {
            url: require('@/assets/csdn.png'),
            name: 'CSDN',
            description: '专业开发者社区',
            link: 'https://www.csdn.net/'
          },
          {
            url: require('@/assets/juejin.png'),
            name: '掘金',
            description: '帮助开发者成长的社区',
            link: 'https://juejin.cn/'
          },
          {
            url: require('@/assets/开源中国.jpg'),
            name: '开源中国',
            description: '中文开源技术交流社区',
            link: 'https://stackoverflow.com/'
          },
          {
            url: require('@/assets/stackover.png'),
            name: 'Stack Overflow',
            description: '中文开源技术交流社区',
            link: 'https://stackoverflow.com/'
          }
        ]
      },
      {
        title: '技术社区',
        data: [
          {
            url: require('@/assets/博客园.png'),
            name: '博客园',
            description: '开发者的网上家园',
            link: 'https://www.cnblogs.com/'
          },
          {
            url: require('@/assets/csdn.png'),
            name: 'CSDN',
            description: '专业开发者社区',
            link: 'https://www.csdn.net/'
          },
          {
            url: require('@/assets/juejin.png'),
            name: '掘金',
            description: '帮助开发者成长的社区',
            link: 'https://juejin.cn/'
          }
        ]
      },
      {
        title: '前端技术',
        data: [
          {
            url: require('@/assets/博客园.png'),
            name: '博客园',
            description: '开发者的网上家园',
            link: 'https://www.cnblogs.com/'
          },
          {
            url: require('@/assets/csdn.png'),
            name: 'CSDN',
            description: '专业开发者社区',
            link: 'https://www.csdn.net/'
          },
          {
            url: require('@/assets/juejin.png'),
            name: '掘金',
            description: '帮助开发者成长的社区',
            link: 'https://juejin.cn/'
          }
        ]
      },
      {
        title: '后端技术',
        data: [
          {
            url: require('@/assets/博客园.png'),
            name: '博客园',
            description: '开发者的网上家园',
            link: 'https://www.cnblogs.com/'
          },
          {
            url: require('@/assets/csdn.png'),
            name: 'CSDN',
            description: '专业开发者社区',
            link: 'https://www.csdn.net/'
          },
          {
            url: require('@/assets/juejin.png'),
            name: '掘金',
            description: '帮助开发者成长的社区',
            link: 'https://juejin.cn/'
          }
        ]
      }
    ]
    return {
      datas
    }
  }
})
</script>
