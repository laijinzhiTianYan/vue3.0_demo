<!--
 * @Author: shiwh
 * @Date: 2020-03-19 10:11:33
 * @LastEditors: shiwh
 * @LastEditTime: 2020-03-19 11:17:58
 * @Description:
 -->
<template>
  <div>
    {{msg}}
    <p>count的值: {{data.count}}</p>
    <button @click="handleClick">给count + 1</button>
  </div>
</template>
<script>
import { reactive, onMounted } from '@vue/composition-api'
export default {
  /*
    setup()执行时机，介于beforeCreate(),created()之间，并取代之前的这两个生命周期，接受两个参数props，context上下文对象取代之前的this
    这个上下文对象中包含了一些有用的属性，这些属性在 vue 2.x 中需要通过 this 才能访问到,同时在setup() 中不再有this对象
    在setup里面创建的响应数据对象或者函数都要return出去
    reactive({}) -----用于创建响应数据取代之前的Observe()来创建响应数据对象
  */
  /*
   LifeCycle Hooks ---->生命周期
  相比于2.x的版本3 同时setup包括了beforeCreate(),created()这两个生命周期，
  使用起来只需要引入，然后在setup中声明即可
  beforeMount -> onBeforeMount
  mounted -> onMounted
  beforeUpdate -> onBeforeUpdate
  updated -> onUpdated
  beforeDestroy -> onBeforeUnmount
  destroyed -> onUnmounted
  errorCaptured -> onErrorCaptured
 */
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup (props, ctx) {
    console.log(props.msg) // "Welcome to Your Vue.js App"
    console.log(ctx, 'ctx-----')
    console.log(ctx.attrs, 'ctx-----')
    console.log(ctx.emit, 'ctx-----')
    console.log(ctx.refs, 'ctx-----')
    console.log(ctx.slots, 'ctx-----')
    onMounted(() => {
    })
    const data = reactive({
      count: 0
    })
    const handleClick = () => {
      data.count += 1
    }
    return {
      data,
      handleClick
    }
  }
}
</script>
