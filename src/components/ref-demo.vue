<!--
 * @Author: shiwh
 * @Date: 2020-03-19 10:41:58
 * @LastEditors: shiwh
 * @LastEditTime: 2020-03-19 10:53:20
 * @Description:
 -->
<template>
  <div>
    <p>count的值为：{{count}}</p>
    <button @click="handleClick">给count + 1</button>
  </div>
</template>
<script>
import { reactive, ref, toRefs } from '@vue/composition-api'
export default {
  name: 'ref',
  /* vue3.0新增的ref方法来创建一个响应式的数据对象，若想要改变此值，通过.value,他与reactive的区别就是创建多个和一个的区别
  isRef()来判断是否是ref()创建的值
  toRefs() 用来转换某个对象为响应数据对象
  */
  setup () {
    const count = ref(0)
    const data = reactive({
      msg: '创建多个响应对象',
      str: '张三'
    })
    /*
    使用扩展运算符来展开 reactive 创建的data,就不用data.某个属性来使用，但是同时这些响应数据就不再是响应数据对象，通过toRefs()来达到转换的目的
    */
    const handleClick = () => {
      count.value += 1 // .value属性来改变ref 创建的count的值,但是template使用时不用.value来访问此值
    }
    return {
      data, // 使用时 data.msg 来使用msg
      ...toRefs(data), // msg str就可以直接使用
      count,
      handleClick
    }
  }
}
</script>
