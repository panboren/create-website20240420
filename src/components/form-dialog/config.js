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
    value: 'back.in(1.7)',
    label: 'back.in'
  },
  {
    value: 'back.out(1.7)',
    label: 'back.out'
  },
  {
    value: 'back.inOut(1.7)',
    label: 'back.inOut'
  },

  {
    value: 'bounce.in',
    label: 'bounce.in'
  },

  {
    value: 'bounce.out',
    label: 'bounce.out'
  },
  {
    value: 'bounce.inOut',
    label: 'bounce.inOut'
  },

  {
    value: 'circ.in',
    label: 'circ.in'
  },
  {
    value: 'circ.out',
    label: 'circ.out'
  },
  {
    value: 'circ.inOut',
    label: 'circ.inOut'
  },

  {
    value: 'elastic.in(1,0.3)',
    label: 'elastic.in'
  },
  {
    value: 'elastic.out(1,0.3)',
    label: 'elastic.out'
  },
  {
    value: 'elastic.inOut(1,0.3)',
    label: 'elastic.inOut'
  },
  {
    value: 'expo.in',
    label: 'expo.in'
  },
  {
    value: 'expo.out',
    label: 'expo.out'
  },
  {
    value: 'expo.inOut',
    label: 'expo.inOut'
  },
  {
    value: 'none',
    label: 'none'
  },

  {
    value: 'power1.in',
    label: 'power1.in'
  },
  {
    value: 'power1.out',
    label: 'power1.out'
  },
  {
    value: 'power1.inOut',
    label: 'power1.inOut'
  },
  {
    value: 'power2.in',
    label: 'power2.in'
  },
  {
    value: 'power2.out',
    label: 'power2.out'
  },
  {
    value: 'power2.inOut',
    label: 'power2.inOut'
  },
  {
    value: 'power3.in',
    label: 'power3.in'
  },
  {
    value: 'power3.out',
    label: 'power3.out'
  },
  {
    value: 'power3.inOut',
    label: 'power3.inOut'
  },
  {
    value: 'power4.in',
    label: 'power4.in'
  },
  {
    value: 'power4.out',
    label: 'power4.out'
  },
  {
    value: 'power4.inOut',
    label: 'power4.inOut'
  },
  {
    value: 'sine.in',
    label: 'sine.in'
  },
  {
    value: 'sine.out',
    label: 'sine.out'
  },
  {
    value: 'sine.inOut',
    label: 'sine.inOut'
  },

  {
    value:
      'rough({\n' +
      '    template:none.in,\n' +
      '    strength: 1,\n' +
      '    points:20,\n' +
      '    taper:both,\n' +
      '    randomize:true,\n' +
      '    clamp:false\n' +
      '  })',
    label: 'rough.in'
  },
  {
    value:
      'rough({\n' +
      'template:none.out,\n' +
      'strength: 1,\n' +
      'points:20,\n' +
      'taper:both,\n' +
      'randomize:true,\n' +
      'clamp:false\n' +
      '})',
    label: 'rough.out'
  },

  {
    value:
      'rough({\n' +
      'template:none.inOut,\n' +
      'strength: 1,\n' +
      'points:20,\n' +
      'taper:both,\n' +
      'randomize:true,\n' +
      'clamp:false\n' +
      '})',
    label: 'rough.inOut'
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
