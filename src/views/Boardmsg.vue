<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div style="">
      <div class="bullet-wrap">
        <div
          class="bullet-item"
          :class="' bullet-animation-' +item.random"
          :data-line="item.line"
          v-for="item in state.bulletlist"
          @animationend="animationend"
          :key="item.id"
        >
        <!-- <div class="img_1 p-0" style="border-radius: 100%; width: 20px;height: 20px;"></div> -->
        <el-icon size="15" color="yellow"><Star /></el-icon>
          <div class="bg-dark-100" style="display: inline-block; margin-t0p: 5px;">{{ item.content }}</div>
        </div>
        <h1 class="text-primary" style="position: relative;top: 280px; left: 725px;
        text-shadow: 2px 4px 10px rgba(255, 255, 255, 0.5), 2px 4px 20px rgba(255, 255, 255, 0.5), 2px 4px 30px rgba(255, 255, 255, 0.5), 2px 4px 20px rgba(255, 255, 255, 0.5);"
        >留言板</h1>
        <div class="flex" style="top:300px; position: relative; left: 650px;z-index: 999;">
          <validate-input
          type="text"
          ref="input"
          placeholder="留下"
          v-model="state.values"
          style="border: 2px solid #eddbdb; box-shadow: 5px 4px 10px #afa1d1; "
        />
        <button class="btn btn-primary" style=" text-align: center; height: 40px;" @click="sendBullet">
          发送
        </button>
      </div>
      </div>
    </div>
  </template>
<script>
import { reactive, onMounted } from 'vue'
import ValidateInput from '../components/ValidateInput.vue'
export default {
  components: {
    ValidateInput
  },
  setup () {
    function getUUID () {
      return Date.now() + Math.random()
    }
    const state = reactive({
      list: [
        {
          id: getUUID(),
          content: '弹幕即将来袭~',
          isLoginUser: true,
          random: 0,
          line: 0
        },
        {
          id: getUUID(),
          content: '只要坚持，没有什么是不可能的',
          isLoginUser: true,
          random: 1,
          line: 0
        },
        {
          id: getUUID(),
          content: '每一次坚持都是为了更好的未来',
          isLoginUser: true,
          random: 2,
          line: 0
        },
        {
          id: getUUID(),
          content: '坚持就是胜利，只要你不放弃',
          isLoginUser: true,
          random: 2,
          line: 0
        },
        {
          id: getUUID(),
          content: '只要坚持不懈，成功就在眼前',
          isLoginUser: true,
          random: 2,
          line: 0
        },
        {
          id: getUUID(),
          content: '坚持下去，终将收获美好的人生',
          isLoginUser: true,
          random: 2,
          line: 0
        }
      ], // 普通的弹幕队列
      clist: [], // c位的弹幕队列
      bulletlist: [], // 当前正在执行的
      values: '',
      idx: 6
    })

    function animationend () {
      state.list.push(state.bulletlist.shift())
    }

    function sendBullet () {
      if (state.values) {
        // 随机生成重要性和颜色
        state.clist.push({
          id: getUUID(),
          content: state.values,
          isLoginUser: true,
          random: parseInt(Math.random() * (3 - 0 + 1) + 0, 10),
          line: 0
        })
        state.values = ''
      }
    }

    onMounted(() => {
      setInterval(() => {
        let item = null
        if (state.idx === 3) {
          // c 位
          item = state.clist.shift()
        }
        if (!item) {
          item = state.list.shift()
        }
        if (item) {
          item.line = state.idx
          state.idx = (state.idx % 5) + 1
          state.bulletlist.push(item)
        } else {
          if (state.clist.length) {
            item = state.clist.shift()
            item.line = 3
            state.idx = 3
            state.bulletlist.push(item)
          }
        }
      }, 1000)
    })

    return {
      state,
      sendBullet,
      animationend
    }
  }
}
</script>
  <style scoped>
  .flex {
    display: flex;
  }

  .van-cell-group--inset {
    margin: auto;
    border-radius: 50px;
    border: 1px solid #d8d7d7;
  }
  .van-cell {
    background: #f8f8f8;
  }
  .bold {
    font-weight: bold;
  }
  .bullet-wrap {
    height: 680px;
    position: relative;
    overflow: hidden;
    background: #333;
    background-size: cover;
    margin-bottom: 40px;
    background-image: url('@/assets/liuyanban.jpg');
    background-position: center;
    background-repeat: no-repeat;
  }
  .bullet-item {
    text-shadow: 1px 1px #000;
    color: #ffffff82;
    white-space: nowrap;
    user-select: none;
    position: absolute;
    top: 0;
    left: 0;
  }
  .bullet-wrap::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.3; /* 设置蒙版的透明度 */
  z-index: 1; /* 将蒙版放在图片的下方 */
}
  .bullet-item[data-line="3"] {
    top: 160px;
  }
  .bullet-item[data-line="4"] {
    top: 240px;
  }
  .bullet-item[data-line="5"] {
    top: 320px;
  }
  .bullet-item[data-line="2"] {
    top: 500px;
  }
  .bullet-animation-0 {
    animation: right2left 6s linear both;
  }
  .bullet-animation-1 {
    animation: right2left 4s linear both;
  }
  .bullet-animation-2 {
    animation: right2left 8s linear both;
  }
  .bullet-animation-3 {
    animation: right2left 5s linear both;
  }

  @keyframes right2left {
    0% {
      transform: translate(100vw);
    }
    100% {
      transform: translate(-100%);
    }
  }
  .img_1{
    display: inline-block;
    height: 15px;
    overflow: hidden;
    background-size: cover;
    background-image: url('@/assets/780.jpg');
    background-position: center;
    background-repeat: no-repeat;
  }
  </style>
