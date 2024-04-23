<template>
  <div class="wrap-main">
    <div class="header">header</div>
    <div class="main"></div>
    <div class="content" id="contentRef" @dblclick="add">
      <el-button @click="show" class="show">预览</el-button>
      <vue-draggable-resizable
        class-name="my-class-draggable-resizable"
        :draggable="isShow"
        :resizable="isShow"
        :disableUserSelect="isShow"
        v-for="(item, index) in listData"
        :key="item.id + index"
        :x="item.formData.x"
        :y="item.formData.y"
        :w="item.formData.width"
        :h="item.formData.height"
        @dragStop="onDragstop"
        @resizeStop="onResizestop"
        @activated="onActivated(item)"
        @deactivated="onDeactivated"
        :parent="true"
      >
        <div
          class="list-item-main"
          :class="[item.className]"
          :style="{
            'font-weight': item.formData.fontWeight,
            'font-size': `${item.formData.fontSize}px`,
            color: item.formData.fontColor,
            'box-shadow': `0px 2px ${item.formData.shadowWidth}px ${item.formData.shadowColor}`,
            background: item.formData.background,
            'border-radius': `${item.formData.radius}px`
          }"
        >
          <div class="list-item">
            <el-icon class="list-item-edit" @click.stop="onEdit(item)"><Edit /></el-icon>
            <img
              v-if="item.formData.type === 'img'"
              :src="item.formData.imgUrl"
              class="list-item-img"
            />
            <div v-if="item.formData.type === 'text'" class="list-item-text">
              {{ item.formData.content }}
            </div>
            <form-dialog
              v-if="item.dialogVisible"
              v-model:visibel="item.dialogVisible"
              :data="item"
            />
          </div>
        </div>
      </vue-draggable-resizable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Edit } from '@element-plus/icons-vue'
import VueDraggableResizable from 'vue-draggable-resizable'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

let listData = ref([]) // 数据
let activeItem = ref(null) // 激活
let editItem = ref({}) // 编辑数据

let isShow = ref(true)

const show = () => {
  console.log(listData)
  isShow.value = !isShow.value
  run()
}

// 编辑
const onEdit = (item) => {
  editItem.value = item
  editItem.value.dialogVisible = true
  console.log('edit')
}
// // 关闭弹窗
// const onclose = ()=>{
//   editItem.value = {}
// }

// 创建
const add = ($event) => {
  console.log($event)
  listData.value.push({
    name: 'panboren' + listData.value.length,
    id: listData.value.length,
    dialogVisible: false,
    className: 'box' + listData.value.length,
    formData: {
      type: 'img',
      x: $event.offsetX,
      y: $event.offsetY,
      width: 200,
      height: 200,
      content: '',
      imgUrl: '',
      radius: 0,
      shadowWidth: 0,
      shadowColor: '#fff',
      background: '#fff',
      fontSize: 12,
      fontColor: '#000',
      fontWeight: 500
    },
    amimation: [
      {
        x: 300,
        rotation: 360,
        duration: 3
        // scaleX: 1,
        // scaleY: 1,
        // rotation: 90,
        // skewX: 0,
        // skewY: 0,
        // opacity: 1,
        // repeat: -1,
        // delay: 0,
        // yoyo: true,
        // duration: 1,
        // ease: "power1.out",
      }
    ]
  })
}

const onActivated = (item) => {
  activeItem.value = item
  console.log('onActivated', item)
}

const onDeactivated = (item) => {
  activeItem.value = null
  console.log('onDeactivated', item)
}

const onDragstop = (x, y) => {
  // left the X
  // top the Y
  console.log('dragstop', x, y)
  if (activeItem.value) {
    listData.value.forEach((item) => {
      if (item.id === activeItem.value.id) {
        item.formData.x = x
        item.formData.y = y
      }
    })
  }
}
const onResizestop = (x, y, width, height) => {
  if (activeItem.value) {
    listData.value.forEach((item) => {
      if (item.id === activeItem.value.id) {
        item.formData.x = x
        item.formData.y = y
        item.formData.width = width
        item.formData.height = height
      }
    })
  }
  console.log('resizestop', x, y, width, height)
}

const run = () => {
  // ScrollTrigger.create({
  //   trigger: '#contentRef',
  //   start: 'top top',
  //   // endTrigger: '#otherID',
  //   end: 'bottom 50%+=100px'
  //   // onToggle: (self) => console.log('toggled, isActive:', self.isActive),
  //   // onUpdate: (self) => {
  //   //   console.log(self)
  //   // }
  // })

  if (listData.value && listData.value.length > 0) {
    listData.value.forEach((item) => {
      console.log(item.className, item.amimation)
      gsap.to(`.${item.className}`, {
        ...item.amimation,
        scrollTrigger: {
          trigger: `.${item.className}`,
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      })
    })

    /* gsap.to('.box0', {
      rotation: 360,
      duration: 3,
      onUpdate: (self) => console.log('direction:', self),
      scrollTrigger: {
        trigger: '.box0',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    })

    gsap.to('.box1', {
      rotation: 360,
      duration: 3,
      onUpdate: (self) => console.log('direction:', self),
      scrollTrigger: {
        trigger: '.box1',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    })*/
  }
}
</script>
<style>
@import 'vue-draggable-resizable/style.css';
</style>
<style scoped>
.wrap-main {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 60px;
    background: rgba(127, 255, 212, 0.35);
  }
}

.content {
  position: relative;
  width: 100%;
  height: 3000px;
}
.show {
  position: absolute;
  left: 20px;
  top: 20px;
}
.list-item-main {
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  .list-item {
    position: relative;
    width: 100%;
    height: 100%;
    .list-item-edit {
      position: absolute;
      right: 5px;
      top: 5px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      padding: 5px;
    }
    .list-item-img {
      width: 100%;
      height: 100%;
      display: block;
    }
    .list-item-text {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      word-wrap: break-word;
    }
  }
}
.my-class-draggable-resizable {
  position: absolute;
}

.menu-tool {
  width: 300px;
  height: 600px;
  background: aquamarine;
}
</style>

<!--<template>
  <div class="content" id="contentRef" @dblclick="add">
    <el-button @click="show" class="show">预览</el-button>
    <vue-draggable-resizable
      v-show="!isShow"
      v-for="(item, index) in listData"
      :key="item.id + index"
      :x="item.x"
      :y="item.y"
      :w="item.width"
      :h="item.height"
      @dragStop="onDragstop"
      @resizeStop="onResizestop"
      @activated="onActivated(item)"
      @deactivated="onDeactivated"
      :parent="true"
    >
      <div class="list-item">
        <el-icon class="list-item-edit" @click.stop="edit(item)"><Edit /></el-icon>
        <img
          v-if="item.formData.type === 'img'"
          :src="item.formData.imgUrl"
          class="list-item-img"
        />
        <div v-if="item.formData.type === 'text'" class="list-item-img">
          {{ item.formData.content }}
        </div>
        <form-dialog
          v-if="item.dialogVisible"
          v-model:visibel="item.dialogVisible"
          v-model:data="item.formData"
        />
      </div>
    </vue-draggable-resizable>
    <div
      v-show="isShow"
      v-for="(item, index) in listData"
      :key="item.id + index"
      :style="{
        transform: 'translate(' + item.x + 'px,' + item.y + 'px)',
        width: item.width + 'px',
        height: item.height + 'px'
      }"
      :class="[item.className]"
    >
      <div class="list-item">
        <el-icon class="list-item-edit" @click.stop="edit(item)"><Edit /></el-icon>
        <img
          v-if="item.formData.type === 'img'"
          :src="item.formData.imgUrl"
          class="list-item-img"
        />
        <div v-if="item.formData.type === 'text'" class="list-item-img">
          {{ item.formData.content }}
        </div>
        <form-dialog
          v-if="item.dialogVisible"
          v-model:visibel="item.dialogVisible"
          v-model:data="item.formData"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Edit } from '@element-plus/icons-vue'
import VueDraggableResizable from 'vue-draggable-resizable'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

let listData = ref([]) // 数据
let activeItem = ref(null) // 激活
let editItem = ref({}) // 编辑数据

let isShow = ref(false)

const show = () => {
  console.log(listData)
  isShow.value = !isShow.value
  run()
}

// 编辑
const edit = (item) => {
  editItem.value = item
  editItem.value.dialogVisible = true
  console.log('edit')
}
// // 关闭弹窗
// const onclose = ()=>{
//   editItem.value = {}
// }

// 创建
const add = ($event) => {
  console.log($event)
  listData.value.push({
    name: 'panboren' + listData.value.length,
    id: listData.value.length,
    x: $event.offsetX,
    y: $event.offsetY,
    width: 200,
    height: 200,
    dialogVisible: false,
    className: 'box' + listData.value.length,
    formData: {
      type: 'img',
      content: '',
      imgUrl: ''
    }
  })
}

const onActivated = (item) => {
  activeItem.value = item
  console.log('onActivated', item)
}

const onDeactivated = (item) => {
  activeItem.value = null
  console.log('onDeactivated', item)
}

const onDragstop = (x, y) => {
  // left the X
  // top the Y
  console.log('dragstop', x, y)
  if (activeItem.value) {
    listData.value.forEach((item) => {
      if (item.id === activeItem.value.id) {
        item.x = x
        item.y = y
      }
    })
  }
}
const onResizestop = (x, y, width, height) => {
  if (activeItem.value) {
    listData.value.forEach((item) => {
      if (item.id === activeItem.value.id) {
        item.x = x
        item.y = y
        item.width = width
        item.height = height
      }
    })
  }
  console.log('resizestop', x, y, width, height)
}

const run = () => {
  // ScrollTrigger.create({
  //   trigger: '#contentRef',
  //   start: 'top top',
  //   // endTrigger: '#otherID',
  //   end: 'bottom 50%+=100px'
  //   // onToggle: (self) => console.log('toggled, isActive:', self.isActive),
  //   // onUpdate: (self) => {
  //   //   console.log(self)
  //   // }
  // })

  if (listData.value && listData.value.length > 1) {
    gsap.to('.box0', {
      rotation: 360,
      duration: 3,
      onUpdate: (self) => console.log('direction:', self),
      scrollTrigger: {
        trigger: '.box0',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    })

    gsap.to('.box1', {
      rotation: 360,
      duration: 3,
      onUpdate: (self) => console.log('direction:', self),
      scrollTrigger: {
        trigger: '.box1',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    })
  }
}
</script>
<style>
@import 'vue-draggable-resizable/style.css';
</style>
<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 3000px;
}
.show {
  position: absolute;
  left: 20px;
  top: 20px;
}
.list-item {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  .list-item-edit {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .list-item-img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>-->

<!--
<template>
<div class="content" @dblclick="add">
  <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-change="change"
      :auto-upload="false"
      :multiple="true"
      v-model:file-list="fileList"
  >
    <el-icon  class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
  <vue-draggable-resizable  v-for="(url,index) in urlData" :key="url+index"   :w="100" :h="100" :parent="true" >
    <img :src="url"  class="avatar" />
  </vue-draggable-resizable>



&lt;!&ndash;  <vue-draggable-resizable  :w="100" :h="100" :parent="true" >
    <p>Hello! I'm a flexible component. You can drag me around and you can resize me.</p>
  </vue-draggable-resizable>
  <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-change="change"
      :auto-upload="false"
      :multiple="true"
      v-model:file-list="fileList"
  >
    <el-icon  class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>&ndash;&gt;
&lt;!&ndash;  <img v-for="(url,index) in urlData" :src="url" :key="url+index"   class="avatar" />&ndash;&gt;

</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'


import VueDraggableResizable from 'vue-draggable-resizable'




const imageUrl = ref('')

let fileList = ref([])

let urlData = computed(()=>{
  let list = []
  fileList.value.forEach((file)=>{
    let url = URL.createObjectURL(file.raw!)
    list.push(url)
  })
  console.log(list)
  return list
})

const change = ( )=>{


}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}






const add = ($evwnt)=>{
  console.log($evwnt)
}







</script>

<style scoped>

.content{
  position: relative;
  width: 100%;
  height: 2000px;
}
.avatar{
  width: 100%;
  height: 100%;
  display: block;
}
/*.avatar-uploader .avatar {*/
/*  width: 178px;*/
/*  height: 178px;*/
/*  display: block;*/
</style>

<style>
@import "vue-draggable-resizable/style.css";
.avatar-uploader .el-upload {
  border: 1px dashed var(&#45;&#45;el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(&#45;&#45;el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(&#45;&#45;el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>

-->

<!--
<template>
  <div class="content" id="contentRef">
    <h1>index页面19999</h1>
    <div class="box">box</div>
    <div class="box2">555</div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('.box', {
    x: 600,
    y: 100,
    rotation: 360,
    duration: 3,
    onUpdate: (self) => console.log('direction:', self),
    scrollTrigger: {
      trigger: '.box',
      start: 'top top',
      end: 'bottom center',
      scrub: true
    }
  })

  gsap.to('.box2', {
    x: 600,
    y: 300,
    rotation: 360,
    duration: 3,
    onUpdate: (self) => console.log('direction:', self),
    scrollTrigger: {
      trigger: '.box2',
      start: 'top top',
      end: 'bottom center',
      scrub: true
    }
  })

  /*  ScrollTrigger.create({
    trigger: '#contentRef',
    start: 'top top',
    // endTrigger: '#otherID',
    end: 'bottom 50%+=100px',
    onToggle: (self) => console.log('toggled, isActive:', self.isActive),
    onUpdate: (self) => {
      console.log(self)
    }
  })*/

  /* gsap.to('.box', {
    scrollTrigger: '.box', // start animation when ".box" enters the viewport
    x: 500,
    pin: true, // 保持元素在视窗中的位置
    scrub: true // 允许拖动滚动条预览动画
  })
  gsap.to('.box2', {
    scrollTrigger: '.box2', // start animation when ".box" enters the viewport
    rotate: 360,
    pin: true, // 保持元素在视窗中的位置
    scrub: true // 允许拖动滚动条预览动画
  })*/
})

// let tl = ScrollTrigger.create({
//   trigger: '.box1',
//   start: 'top center',
//   end: '+=500'
// })
// tl = gsap.to('.green', {
//   x: 600,
//   y: 100,
//   rotation: 360,
//   duration: 3,
//   onUpdate: (self) => console.log('direction:', self),
//   scrollTrigger: {
//     trigger: '.green',
//     start: 'top top',
//     end: 'bottom center',
//     scrub: true
//   }
// })
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  height: 2000px;

  .box {
    width: 100%;
    height: 1500px;
    background: red;
  }
  .box2 {
    width: 100%;
    height: 1800px;
    background: #1bbea0;
  }
}
</style>
-->
