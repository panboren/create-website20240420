export let typeOption = ref([
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

export let amimationOptions = ref([
  {
    value: 'width',
    label: '宽'
  },
  {
    value: 'height',
    label: '高'
  },
  {
    value: 'radius',
    label: '圆角'
  },
  {
    value: 'shadowWidth',
    label: '阴影'
  },
  {
    value: 'shadowColor',
    label: '阴影颜色',
    type: 'color'
  },
  {
    value: 'background',
    label: '背景颜色',
    type: 'color'
  },
  {
    value: 'fontSize',
    label: '字体尺寸'
  },
  {
    value: 'fontColor',
    label: '字体颜色',
    type: 'color'
  },
  {
    value: 'fontWeight',
    label: '字体加粗'
  },
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
  }
])

// import { CustomWiggle } from 'gsap/CustomWiggle'
export let easeOptions = ref([
  {
    value: 'back.inOut(1.7)',
    label: 'back'
  },
  {
    value: 'bounce.inOut',
    label: 'bounce'
  },
  {
    value: 'circ.inOut',
    label: 'circ'
  },
  {
    value: 'elastic.inOut(1,0.3)',
    label: 'elastic'
  },
  {
    value: 'expo.inOut',
    label: 'expo'
  },
  {
    value: 'none',
    label: 'none'
  },
  {
    value: 'power1.inOut',
    label: 'quad/power1'
  },
  {
    value: 'power2.inOut',
    label: 'Cubic/power2'
  },
  {
    value: 'power3.inOut',
    label: 'quart/power3'
  },
  {
    value: 'power4.inOut',
    label: 'strong/Quint/power4'
  },
  {
    value: 'sine.inOut',
    label: 'sine'
  },
  {
    value:
      'rough({\n' +
      'template:none.out,\n' +
      'strength: 1,\n' +
      'points:20,\n' +
      'taper:none,\n' +
      'randomize:true,\n' +
      'clamp:false\n' +
      '})',
    label: 'rough'
  },
  {
    value: 'slow(0.7,0.7,false)',
    label: 'slow'
  },
  {
    value: 'steps(12)',
    label: 'steps'
  },
  {
    value: 'expoScale(0.5,7,none)',
    label: 'expoScale'
  }
  // {
  //   value:
  //     'CustomEase.create("custom", "M0,0 C0,0 0.1405,0.03363 0.185,0.04842 0.22428,0.06147 0.29873,0.09128 0.335,0.10929 0.37144,0.12739 0.4418,0.16891 0.475,0.19252 0.50828,0.21619 0.57051,0.26862 0.6,0.29782 0.63225,0.32975 0.69247,0.40053 0.72,0.43744 0.74761,0.47444 0.79673,0.55185 0.82,0.59278 0.8459,0.63833 0.89312,0.73435 0.915,0.7836 0.93835,0.83617 1,1 1,1 ")',
  //   label: 'Custom'
  // },
  // {
  //   value:
  //     'CustomBounce.create("myBounce", {\n' +
  //     'strength:0.7,\n' +
  //     'endAtStart:false,\n' +
  //     'squash:1,\n' +
  //     'squashID: "myBounce-squash"\n' +
  //     '})',
  //   label: 'CustomBounce'
  // },
  // {
  //   value: ' CustomWiggle.create("myWiggle", {\n' + 'wiggles:10,\n' + 'type:easeInOut\n' + '})',
  //   label: 'CustomWiggle'
  // }
])
