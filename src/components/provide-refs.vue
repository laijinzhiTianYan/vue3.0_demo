<!--
 * @Author: shiwh
 * @Date: 2020-03-19 11:18:32
 * @LastEditors: shiwh
 * @LastEditTime: 2020-03-19 11:33:02
 * @Description:
 -->
<template>
  <div>
    <input ref="input" value='嘻嘻'/>
  </div>
</template>
<script>
import { reactive, ref, onMounted, provide } from '@vue/composition-api'
export default {

  name: 'provide-refs',
  setup () {
    /*
    ref方法同样可以完成2.x 通过$refs来获取相应的DOM和组件,
    只需要声明绑定在dom或者组件上相同的refname const refname = ref(null),在setup函数中return 即可就可以获取相应的dom和组件
    */
    const input = ref(null)
    const data = reactive({
      provideNum: 0
    })
    onMounted(() => {
      console.log(input.value, 'qqqqqqqq')
    })
    /*
    provide方法适用于高阶组件来达到层级过多时不必写props来达到传值目的，只需要在祖先组件provide某个值，子孙组件inject获取即可
    2.x版本并不能传动态响应的数据，可以通过_provided来传入响应数据，3.0使用provide可以传入响应数据
    使用方法：
    导入provide
    provide(key, value)
    */
    provide('num', data.provideNum) // 子孙组件就可以通过 导入 inject 来获取 inject('num')

    return {
      data,
      input
    }
  }
}
</script>
