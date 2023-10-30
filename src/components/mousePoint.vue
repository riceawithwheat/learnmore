<template>
    <div>
        <div class="mydiv"></div>
    </div>
</template>
<script>
// 点击出的文字数组，可自行添加，不要太多哦
const text = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']
// 计数
let count = 0
// 鼠标按下事件
document.body.onmousedown = function (event) {
  // 获取鼠标点击位置
  const x = event.pageX - 18
  const y = event.pageY - 30
  // 分别创建所需要的元素节点
  const img = document.createElement('div')
  const left = document.createElement('div')
  const right = document.createElement('div')
  const under = document.createElement('div')
  const txt = document.createElement('div')
  // 通过随机数从文字数组中获取随机下标的文字
  const textNode = document.createTextNode(text[parseInt(Math.random() * text.length)])
  // 文字添加到txt节点中
  txt.appendChild(textNode)

  img.className = 'img' + ' ' + 'img' + count
  left.className = 'left'
  right.className = 'right'
  under.className = 'under'
  txt.className = 'text'
  img.style.top = y + 'px'
  img.style.left = x + 'px'
  // 将创建的元素添加到容器中
  img.appendChild(left)
  img.appendChild(right)
  img.appendChild(under)
  img.appendChild(txt)
  document.body.appendChild(img)
  // 获取随机颜色
  const color = 'rgb(' + 0 + ',' + 0 + ',' +
         parseInt(Math.random() * 255) + ')'
  txt.style.color = color
  for (let i = 0; i < 3; i++) {
    img.children[i].style.background = color
  }
}
// 鼠标抬起事件
document.body.onmouseup = function () {
  document.getElementsByClassName('img' + count)[0].style.transform = 'scale(0.5)'
  document.getElementsByClassName('img' + count)[0].style.transform = 'translateY(-40px)'
  document.getElementsByClassName('img' + count)[0].style.opacity = '0'
  count++
}

</script>
<style>
body{
position:relative;
}
.img {
width: 20px;
height: 20px;
opacity: 1;
position: absolute;
z-index: 100000;
transition: 2s;
}
.left,.right {
width: 10px;
height: 10px;
border-radius: 100%;
position: absolute;
}
.right {right: 0;}
.under {width: 10px;height: 10px;position: absolute;top: 5px;left: 5px;transform: rotate(45deg)}
.text {width: 50px;font-size: 10px;line-height: 1;position: absolute;top: -1em;left: -15px;text-align: center;}

</style>
