<!--
 * @ description:
 * @ author: panboren
 * @ created_at: 2024/4/21 22:36
 * @ QQ: 3248874747
-->
<template>
  <el-dialog
    :lock-scroll="false"
    :modal="false"
    :append-to-body="true"
    :draggable="true"
    :model-value="visibel"
    @update:modelValue="input"
    title="编辑"
    width="580"
    @close="onclose"
  >
    <el-form ref="form" :model="formData" label-width="80px" :inline="true">
      <el-form-item label="选择类型" style="width: 100%;">
        <el-select v-model="formData.type" placeholder="请选择类型">
          <el-option
            v-for="item in typeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="宽">
        <el-input clearable placeholder="请输入" style="width: 80px" v-model="formData.width" :min="1" />
      </el-form-item>
      <el-form-item label="高">
               <el-input clearable placeholder="请输入" style="width: 80px" v-model="formData.width" :min="1" />

      </el-form-item>
      <el-form-item label="圆角">
               <el-input clearable placeholder="请输入" style="width: 80px" v-model="formData.width" :min="1" />

      </el-form-item>
      <el-form-item label="阴影">
               <el-input clearable placeholder="请输入" style="width: 80px" v-model="formData.width" :min="1" />

      </el-form-item>
      <el-form-item label="阴影颜色">
        <el-color-picker v-model="formData.height" show-alpha />
      </el-form-item>
      <el-form-item label="背景颜色">
        <el-color-picker v-model="formData.height" show-alpha />
      </el-form-item>
      <el-form-item label="添加文字" style="width: 100%" v-if="formData.type === 'text'">
        <el-input v-model="formData.content" />
      </el-form-item>
      <el-form-item label="文字尺寸" v-if="formData.type === 'text'">
               <el-input clearable placeholder="请输入" style="width: 80px" v-model="formData.width" :min="1" />

      </el-form-item>
      <el-form-item label="文字加粗" v-if="formData.type === 'text'">
               <el-input clearable placeholder="请输入" style="width: 80px" v-model="formData.width" :min="1" />

      </el-form-item>
      <el-form-item label="文字颜色" v-if="formData.type === 'text'">
        <el-color-picker v-model="formData.height" />
      </el-form-item>
      <el-form-item label="添加图片" v-if="formData.type === 'img'" style="width: 100%">
        <div class="form-img-main" v-show="formData.imgUrl">
          <img :src="formData.imgUrl" class="form-img" />
          <el-icon @click.stop="remove" class="form-img-close"><Close /></el-icon>
        </div>
        <el-upload
          v-show="!formData.imgUrl"
          ref="upload"
          class="avatar-uploader"
          :show-file-list="false"
          :on-change="change"
          :auto-upload="false"
          :limit="1"
        >
          <div class="form-img-main">
            <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="添加动画" style="width: 100%">
        <el-button type="primary" :icon="Plus" />
      </el-form-item>
<!--      <el-form-item label="">
        <el-timeline style="max-width: 600px">
          <el-timeline-item timestamp="" placement="top">
            <el-card>
              <el-form-item label="过度时间">
                       <el-input clearable placeholder="请输入" style="width: 80px" v-model="formData.width" :min="1" />
              </el-form-item>
              <el-form-item label="动画类型">
                <el-select v-model="formData.type" placeholder="请选择动画类型">
                  <el-option
                      v-for="item in amimationOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="移动X">
                      <span style="margin: 0 5px;"> 开始</span>
                       <el-input clearable placeholder="请输入" style="width: 80px" v-model="formData.width" :min="1" />
                       <span style="margin: 0 5px;">结束</span>
                       <el-input clearable placeholder="请输入" style="width: 80px" v-model="formData.width" :min="1" />
              </el-form-item>


            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-form-item>-->







<!--      <el-form-item label="选择类型">
        <el-select v-model="formData.type" placeholder="请选择类型">
          <el-option
            v-for="item in typeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>-->

      <!--      <el-form-item label="延迟时间">
               <el-input clearable placeholder="请输入" style="width: 80px" v-model="formData.width" :min="1" />

      </el-form-item>
      <el-form-item label="重复次数">
               <el-input clearable placeholder="请输入" style="width: 80px" v-model="formData.width" :min="1" />

      </el-form-item>

      <el-form-item label="动画方向">
               <el-input clearable placeholder="请输入" style="width: 80px" v-model="formData.width" :min="1" />

      </el-form-item>-->

      <!--      <el-form-item label="选择类型">
        <el-select v-model="formData.type" placeholder="请选择类型">
          <el-option
            v-for="item in typeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>-->
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="onclose">取消</el-button>
        <el-button type="primary" @click="saveData"> 保存 </el-button>
      </div>
    </template>
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

let formData = ref({ ...props.data })
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
    value:'x',
    label:'移动X'
  },
  {
    value:'y',
    label:'移动Y'
  },
  {
    value:'scaleX',
    label:'缩放X'
  },
  {
    value:'scaleY',
    label:'缩放Y'
  },
  {
    value:'rotation',
    label:'旋转'
  },
  {
    value:'skewX',
    label:'倾斜X'
  },
  {
    value:'skewY',
    label:'倾斜Y'
  },
  {
    value:'opacity',
    label:'透明度'
  },
  {
    value:'rotation',
    label:'旋转'
  },
  {
    value:'repeat',
    label:'重复'
  },
  {
    value:'delay',
    label:'延迟'
  },
  {
    value:'yoyo',
    label:'方向'
  },
  {
    value:'ease',
    label:'曲线'
  }
])



const handleExceed = () => {
  upload.value!.clearFiles()
}

const remove = () => {
  formData.value.imgUrl = ''
  handleExceed()
}

const change = (file) => {
  let url = URL.createObjectURL(file.raw!)
  formData.value.imgUrl = url
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
<style scoped>
.form-img-main {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  .form-img {
    width: 100px;
    height: 100px;
    display: block;
  }
  .form-img-close {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .item-label{
    margin: 0 5px;
    font-size: 12px;
  }
}
</style>
