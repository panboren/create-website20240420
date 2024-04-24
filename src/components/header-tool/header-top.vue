<template>
  <div class="header">
    <div
      class="header-item header-diannao"
      :class="{ active: tabId === 1 }"
      @click="select(1)"
    ></div>
    <div
      class="header-item header-shouji"
      :class="{ active: tabId === 2 }"
      @click="select(2)"
    ></div>
    <div class="header-look">预览</div>
  </div>
</template>
<script setup lang="ts">
let tabId = ref(1)

const select = (id) => {
  tabId.value = id
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #f8fafd 0%, #d3f1eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  .header-diannao {
    background: url('@/assets/image/diannao.png') no-repeat;
    background-size: 100% 100%;
  }
  .header-shouji {
    margin-left: 20px;
    background: url('@/assets/image/shouji.png') no-repeat;
    background-size: 100% 100%;
  }
  .header-item {
    width: 30px;
    height: 30px;
    padding: 10px;
    box-sizing: border-box;
    &.active {
      border-bottom: 2px solid #009688;
    }
  }
  .header-look {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    border-radius: 50%;
    &:hover {
      color: #409eff;
      background: linear-gradient(to right, #f8fafd 0%, #d3f1eb 50%, #f8fafd 100%);
    }
  }
}
</style>
