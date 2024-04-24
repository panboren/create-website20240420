<!--
 * @ description:
 * @ author: panboren
 * @ created_at: 2024/4/21 22:36
 * @ QQ: 3248874747
-->
<template>
  <el-dialog
    class="no-padding"
    :lock-scroll="false"
    :modal="false"
    :append-to-body="true"
    :draggable="true"
    :model-value="visibel"
    @update:modelValue="input"
    title="基本信息编辑"
    width="320"
    @close="onclose"
    :before-close="kill"
  >
    <div class="form-main">
      <el-form ref="form" :model="formData.formData" label-width="80px" :inline="true">
        <div v-show="isUp">
          <el-form-item label="选择类型" style="width: 100%">
            <el-select
              v-model="formData.formData.type"
              placeholder="请选择类型"
              style="width: 200px"
            >
              <el-option
                v-for="item in typeOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="x" label-width="60px" style="margin-right: 10px">
            <el-input
              clearable
              placeholder="请输入"
              style="width: 73px"
              v-model="formData.formData.x"
              :min="1"
            />
          </el-form-item>
          <el-form-item label="y" label-width="60px">
            <el-input
              clearable
              placeholder="请输入"
              style="width: 73px"
              v-model="formData.formData.y"
              :min="1"
            />
          </el-form-item>
          <el-form-item label="宽" label-width="60px" style="margin-right: 10px">
            <el-input
              clearable
              placeholder="请输入"
              style="width: 73px"
              v-model="formData.formData.width"
              :min="1"
            />
          </el-form-item>
          <el-form-item label="高" label-width="60px">
            <el-input
              clearable
              placeholder="请输入"
              style="width: 73px"
              v-model="formData.formData.height"
              :min="1"
            />
          </el-form-item>
          <el-form-item label="圆角" label-width="60px" style="margin-right: 10px">
            <el-input
              clearable
              placeholder="请输入"
              style="width: 73px"
              v-model="formData.formData.borderRadius"
              :min="1"
            />
          </el-form-item>
          <el-form-item label="背景颜色">
            <el-color-picker v-model="formData.formData.background" show-alpha />
          </el-form-item>
          <template v-if="formData.formData.type === 'text'">
            <el-form-item label="添加文字" style="width: 100%">
              <el-input
                v-model="formData.formData.content"
                clearable
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
            <el-form-item label="尺寸" label-width="60px" style="margin-right: 10px">
              <el-input
                clearable
                placeholder="请输入"
                style="width: 72px"
                v-model="formData.formData.fontSize"
                :min="1"
              />
            </el-form-item>
            <el-form-item label="加粗" label-width="60px">
              <el-input
                clearable
                placeholder="请输入"
                style="width: 72px"
                v-model="formData.formData.fontWeight"
                :min="1"
              />
            </el-form-item>
            <el-form-item label="颜色" label-width="60px" style="margin-right: 10px">
              <el-color-picker v-model="formData.formData.color" />
            </el-form-item>
          </template>
          <template v-if="formData.formData.type === 'img'">
            <el-form-item label="添加图片" style="width: 100%">
              <div class="form-img-main" v-show="formData.formData.imgUrl">
                <img :src="formData.formData.imgUrl" class="form-img" />
                <el-icon @click.stop="removeImg" class="form-img-close">
                  <Close />
                </el-icon>
              </div>
              <el-upload
                v-show="!formData.formData.imgUrl"
                ref="upload"
                class="avatar-uploader"
                :show-file-list="false"
                :on-change="change"
                :auto-upload="false"
                :limit="1"
              >
                <div class="form-img-main">
                  <el-icon class="avatar-uploader-icon">
                    <Plus />
                  </el-icon>
                </div>
              </el-upload>
            </el-form-item>
          </template>
        </div>
        <el-form-item label="添加动画" style="width: 100%">
          <el-button type="primary" :icon="Plus" @click="addAmimation" />
          <el-button type="primary" @click="preview">动画预览</el-button>
          <el-button
            type="text"
            @click="isUp = !isUp"
            :icon="DArrowLeft"
            :style="{ transform: isUp ? 'rotate(90deg)' : 'rotate(-90deg)' }"
          ></el-button>

          <div class="up"></div>
        </el-form-item>

        <el-scrollbar :height="isUp ? '250px' : '580px'">
          <el-timeline style="padding-left: 20px">
            <el-timeline-item
              v-for="(item, index) in formData.amimation"
              :key="item.id + '_' + index"
              timestamp=""
              placement="top"
            >
              <div class="timeline-item-main">
                <el-form-item
                  label="过度时间"
                  label-width="80px"
                  style="margin-right: 0; margin-bottom: 5px; width: 100%"
                >
                  <el-input
                    clearable
                    placeholder="请输入"
                    v-model="item.duration"
                    :min="1"
                    style="width: 120px"
                  />
                </el-form-item>
                <el-form-item
                  label="动画类型"
                  label-width="80px"
                  style="margin-right: 0; margin-bottom: 5px; width: 100%"
                >
                  <el-select
                    v-model="item.ease"
                    placeholder="请选择动画类型"
                    style="width: 160px"
                    :teleported="false"
                  >
                    <el-option
                      v-for="anItem in easeOptions"
                      :key="anItem.value"
                      :label="anItem.label"
                      :value="anItem.value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item
                  label="动画属性"
                  label-width="80px"
                  style="margin-right: 0; margin-bottom: 5px; width: 100%"
                >
                  <el-select
                    v-model="item.keys"
                    placeholder="请选择动画属性"
                    style="width: 160px"
                    :teleported="false"
                    multiple
                    clearable
                    collapse-tags
                    :max-collapse-tags="1"
                    @change="changeKey(item.keys, item)"
                  >
                    <el-option
                      v-for="anItem in amimationData"
                      :key="anItem.value"
                      :label="anItem.label"
                      :value="anItem.value"
                    />
                  </el-select>
                </el-form-item>
                <template v-for="anItem in amimationData" :key="anItem.value">
                  <el-form-item
                    v-if="item.keys.includes(anItem.value)"
                    :key="anItem.value"
                    :label="anItem.label"
                    label-width="80px"
                    style="margin-right: 0; margin-bottom: 5px"
                  >
                    <el-color-picker
                      v-if="anItem.type === 'color'"
                      v-model="item[anItem.value]"
                      show-alpha
                    />
                    <el-input
                      v-else
                      clearable
                      placeholder="请输入"
                      v-model="item[anItem.value]"
                      :min="1"
                      style="width: 120px"
                    />
                    <el-icon
                      @click.stop="removeKey(item.keys, anItem.value, item)"
                      class="timeline-item-main-key-close"
                    >
                      <Close />
                    </el-icon>
                  </el-form-item>
                </template>
              </div>
            </el-timeline-item>
          </el-timeline>
        </el-scrollbar>
      </el-form>
      <!--    <template #footer>-->
      <!--      <div class="dialog-footer">-->
      <!--        <el-button @click="onclose">取消</el-button>-->
      <!--        <el-button type="primary" @click="saveData"> 保存</el-button>-->
      <!--      </div>-->
      <!--    </template>-->
    </div>
  </el-dialog>
</template>
<script setup lang="ts">
import { typeOption, amimationOptions, easeOptions } from '~/components/form-dialog/config'
import { Plus, Close, DArrowLeft } from '@element-plus/icons-vue'
const props = defineProps({
  visibel: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

let emit = defineEmits(['update:visibel', 'update:data', 'showAnimation', 'close', 'clear'])
let isUp = ref(true)
const upload = ref(null)
let formData = ref(props.data)
// 清空图片
const handleExceed = () => {
  upload.value!.clearFiles()
}

// change key
const changeKey = (keys, data) => {
  let keyList = ['keys', 'duration', 'ease', ...keys]
  for (let key in data) {
    if (!keyList.includes(key)) {
      delete data[key]
    }
  }
}

// 删除key
const removeKey = (keys, key, data) => {
  keys.splice(keys.indexOf(key), 1)
  delete data[key]
}

// 删除图片
const removeImg = () => {
  formData.value.formData.imgUrl = ''
  handleExceed()
}
// 添加动画
const change = (file) => {
  let url = URL.createObjectURL(file.raw!)
  formData.value.formData.imgUrl = url
}
// 动画预览
const preview = () => {
  emit('showAnimation', formData.value)
}

// 添加动画
const addAmimation = () => {
  formData.value.amimation.push({
    keys: [],
    duration: 1,
    ease: 'none'
  })
}

const input = (value) => {
  emit('update:visibel', value)
}
// 关闭弹窗
const onclose = () => {
  emit('clear', formData.value)
  emit('update:visibel', false)
  emit('close', false)
}

let amimationLoading = ref(false)
let amimationData = ref(amimationOptions)
const remoteMethod = (query) => {
  if (query) {
    amimationLoading.value = true
    setTimeout(() => {
      amimationLoading.value = false
      amimationData.value = amimationData.value.filter((item) => {
        return item.label.indexOf(query) > -1
      })
    }, 200)
  } else {
    amimationData.value = amimationOptions
  }
}
</script>
<style scoped lang="scss">
.form-main {
  padding: 10px 5px;
  box-sizing: border-box;
}
.form-img-main {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #dcdfe6;

  .form-img {
    width: 60px;
    height: 60px;
    display: block;
  }

  .form-img-close {
    position: absolute;
    right: 5px;
    top: 5px;
  }
}

.time-line-list {
  width: 100%;
  height: 200px;
  overflow: auto;
}

.timeline-item-main {
  width: 228px;
}
</style>
<style>
.no-padding .el-dialog__body {
  padding: 0 !important;
}
</style>
