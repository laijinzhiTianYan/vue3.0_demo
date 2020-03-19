<!--
 * @Author: shiwh
 * @Date: 2020-03-19 10:54:46
 * @LastEditors: shiwh
 * @LastEditTime: 2020-03-19 11:14:27
 * @Description:
 -->
<template>
  <div>
    <p>
      num的值：{{data.num}}
    </p>
    <p>
      computedCount的值：{{computedCount}}
    </p>
    <button @click="handleClick">num + 1</button>
    <P>{{data.str}}</P>
  </div>
</template>
<script>
import { reactive, computed, watch } from '@vue/composition-api'
export default {
  name: 'watch-computed',
  setup () {
    const data = reactive({
      num: 1,
      str: ''
    })
    // const computedCount = computed(() => data.num + 10) // 创建只读的computed
    const computedCount = computed({ // 创建可读可写的computed
      get: () => {
        return data.num + 10
      },
      set: (val) => {
        data.num = val - 15
      }
    })
    computedCount.value = 30
    console.log(computedCount.value, 'computedCount')
    const handleClick = () => {
      data.num += 1 // .value属性来改变ref 创建的count的值,但是template使用时不用.value来访问此值
    }
    watch(() => data.num, (newVal, oldVal) => {
      data.str = `data.num的值变成了${newVal}`
    }, {
      lazy: true // 与vue2.x相比immediate,是否立即开始监听 lazy ---> true 不立即开启
    })
    /*
    watch多个reactive创建出来的值时,
    watch([() => data.a, () => data.b], ([newVala,newValb], [oldVala, oldValb]) => {

    }, {
      lazy: true // 与vue2.x相比immediate,是否立即开始监听 lazy ---> true 不立即开启
    })
    */
    /*
    watch多个ref创建出来的值时,
    const a = ref(0)
     const b = ref(0)
    watch([a, b], ([newVala,newValb], [oldVala, oldValb]) => {

    }, {
      lazy: true // 与vue2.x相比immediate,是否立即开始监听 lazy ---> true 不立即开启
    })
    */
    /*
    与此同时watch还可以有停止方法来暂停监听
      const 暂停方法 = watch()
      只需调用暂停方法便可以停止监听
    */
    return {
      data,
      computedCount,
      handleClick
    }
  }

}
</script>
