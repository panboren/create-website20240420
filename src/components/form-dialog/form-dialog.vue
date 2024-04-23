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
  >
    <div class="form-main">
      <el-form ref="form" :model="formData.formData" label-width="80px" :inline="true">
        <el-form-item label="选择类型" style="width: 100%">
          <el-select v-model="formData.formData.type" placeholder="请选择类型" style="width: 200px">
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
            v-model="formData.formData.radius"
            :min="1"
          />
        </el-form-item>
        <el-form-item label="阴影" label-width="60px">
          <el-input
            clearable
            placeholder="请输入"
            style="width: 72px"
            v-model="formData.formData.shadowWidth"
            :min="1"
          />
        </el-form-item>
        <el-form-item label="阴影颜色">
          <el-color-picker v-model="formData.formData.shadowColor" show-alpha />
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
            <el-color-picker v-model="formData.formData.fontColor" />
          </el-form-item>
        </template>
        <template v-if="formData.formData.type === 'img'">
          <el-form-item label="添加图片" style="width: 100%">
            <div class="form-img-main" v-show="formData.formData.imgUrl">
              <img :src="formData.formData.imgUrl" class="form-img" />
              <el-icon @click.stop="remove" class="form-img-close">
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
        <el-form-item label="添加动画" style="width: 100%">
          <el-button type="primary" :icon="Plus" @click="addAmimation" />
        </el-form-item>
        <el-scrollbar height="210px">
          <el-timeline>
            <el-timeline-item timestamp="" placement="top">
              <div class="timeline-item-main">
                <el-form-item
                  label="动画类型"
                  label-width="80px"
                  style="margin-right: 0; margin-bottom: 5px"
                >
                  <el-select v-model="formData.formData.type" placeholder="请选择动画类型">
                    <el-option
                      v-for="item in amimationOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item
                  label="过度时间"
                  label-width="80px"
                  style="margin-right: 0; margin-bottom: 5px"
                >
                  <el-input
                    clearable
                    placeholder="请输入"
                    v-model="formData.formData.width"
                    :min="1"
                    style="width: 100px"
                  />
                  <el-icon @click.stop="remove" class="timeline-item-main-key-close">
                    <Close />
                  </el-icon>
                </el-form-item>
                <el-form-item
                  label="移动x"
                  label-width="80px"
                  style="margin-right: 0; margin-bottom: 5px"
                >
                  <el-input
                    clearable
                    placeholder="请输入"
                    v-model="formData.formData.width"
                    :min="1"
                    style="width: 100px"
                  />
                  <el-icon @click.stop="remove" class="timeline-item-main-key-close">
                    <Close />
                  </el-icon>
                </el-form-item>
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
import { Plus, Close } from '@element-plus/icons-vue'
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

let emit = defineEmits(['update:visibel', 'update:data'])

const upload = ref(null)

let formData = ref(props.data)
let typeOption = ref([
  {
    value: 'img',
    label: '图片'
  },
  {
    value: 'text',
    label: '文本'
  },
  {
    value: 'div',
    label: '空框'
  }
  // {
  //   value: 'audio',
  //   label: '音频'
  // },
  // {
  //   value: 'video',
  //   label: '视频'
  // }
])

let amimationOptions = ref([
  {
    value: 'x',
    label: '移动X'
  },
  {
    value: 'y',
    label: '移动Y'
  },
  {
    value: 'scaleX',
    label: '缩放X'
  },
  {
    value: 'scaleY',
    label: '缩放Y'
  },
  {
    value: 'rotation',
    label: '旋转'
  },
  {
    value: 'skewX',
    label: '倾斜X'
  },
  {
    value: 'skewY',
    label: '倾斜Y'
  },
  {
    value: 'opacity',
    label: '透明度'
  },
  {
    value: 'rotation',
    label: '旋转'
  },
  {
    value: 'repeat',
    label: '重复'
  },
  {
    value: 'delay',
    label: '延迟'
  },
  {
    value: 'yoyo',
    label: '方向'
  },
  {
    value: 'ease',
    label: '曲线'
  }
])

const handleExceed = () => {
  upload.value!.clearFiles()
}

const remove = () => {
  formData.value.formData.imgUrl = ''
  handleExceed()
}

// 添加动画
const addAmimation = () => {}

const change = (file) => {
  let url = URL.createObjectURL(file.raw!)
  formData.value.formData.imgUrl = url
}

const input = (value) => {
  emit('update:visibel', value)
}
// 关闭弹窗
const onclose = () => {
  emit('update:visibel', false)
}

const saveData = () => {
  emit('update:data', formData.value)
  onclose()
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
  width: 200px;
}
</style>
<style>
.no-padding .el-dialog__body {
  padding: 0 !important;
}
</style>
