<template>
  <div class="preview-main">
    <div class="preview" id="previewRef">
      <div
        v-for="(item, index) in listData"
        :key="item.id + index"
        class="list-item-main"
        :class="[item.className]"
        :style="{
          transform: `translate(${item.formData.x}px, ${item.formData.y}px)`,
          width: `${item.formData.width}px`,
          height: `${item.formData.height}px`,
          'font-weight': item.formData.fontWeight,
          'font-size': `${item.formData.fontSize}px`,
          color: item.formData.color,
          background: item.formData.background,
          'border-radius': `${item.formData.borderRadius}px`
        }"
      >
        <div class="list-item">
          <img
            v-if="item.formData.type === 'img'"
            :src="item.formData.imgUrl"
            class="list-item-img"
          />
          <div v-if="item.formData.type === 'text'" class="list-item-text">
            {{ item.formData.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)
let listData = ref([])
let timeline = ref(null)
const runAnimation = () => {
  let timer = setTimeout(async () => {
    clearTimeout(timer)
    timeline.value ? timeline.value?.kill() : null
    await nextTick()
    let timeList = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: '.preview',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true, // 1
        pin: true,
        snap: {
          snapTo: 'labels',
          duration: { min: 0.2, max: 3 },
          delay: 0.2,
          ease: 'power1.inOut'
        }
      }
    })
    timeline.value = timeList
    listData.value.forEach((item) => {
      item.amimation.forEach((child) => {
        let res = child || {}
        delete res.keys
        timeList.to(`.${item.className}`, {
          duration: 1,
          ease: 'none',
          width: 524,
          height: 251,
          borderRadius: 60,
          onComplete: () => {
            console.log('onComplete888', item)
          }
        })
      })
    })
  }, 300)
}
onMounted(() => {
  let res = localStorage.getItem('ANIMASTION_DATA')
  console.log(999, res)
  if (res) {
    listData.value = JSON.parse(res) || []
    console.log(894, listData.value)
    runAnimation()
  }
})
</script>

<style scoped lang="scss">
.preview-main {
  width: 100%;
  height: 100%;
}
.preview {
  position: relative;
  width: 100%;
  height: 3000px;
  overflow: hidden;
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
    .list-item-tool {
      position: absolute;
      right: 5px;
      top: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      border: 1px solid #626262;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.8);
    }

    .list-item-edit {
      border-radius: 4px;
      padding: 5px;
      color: #fff;
      margin: 0px 4px;
      cursor: pointer;
      &:hover {
        background: #3f80b9;
      }
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
</style>
