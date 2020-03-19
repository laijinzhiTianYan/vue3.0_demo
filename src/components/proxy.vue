<!--
 * @Author: shiwh
 * @Date: 2020-03-19 09:29:53
 * @LastEditors: shiwh
 * @LastEditTime: 2020-03-19 10:10:45
 * @Description: proxy
 -->
<template>
  <div>
    <p>简易版Proxy：</p>
    <input type="text" id='input'>
    <span id="txt"></span>
    <br>
    <br>
    <br>
    <button id='btn'>增加todolist</button>
    <br>
    <br>
    <br>
    <span id="text">list:</span>
    <ul>
    </ul>
  </div>
</template>
<script>
import { reactive, onMounted } from '@vue/composition-api'
export default {
  /*
    相对于Vue2.0的Objec.defineProperty()缺陷： 无法监听数组下标的变化，以及监听对象时是通过遍历和递归来劫持对象属性来做到响应
    Vue3.0的proxy可以不用再去递归而是监听整个对象，同时有多达13中劫持方法，具体MDN上参考Proxy
  */
  setup () {
    onMounted(() => {
      const obj = {}
      const input = document.getElementById('input')
      const txt = document.getElementById('txt')
      const newObj = new Proxy(obj, {
        get: function (target, key) {
          return Reflect.get(target, key)
        },
        set: function (target, key, value) {
          console.log(target, key, value)
          if (key === 'innerHTML') {
            input.value = value
            txt.innerHTML = value
          }
          return Reflect.set(target, key, value)
        }
      })

      input.addEventListener('keyup', function (e) {
        newObj.innerHTML = e.target.value
      })
      const temp = []
      const btn = document.getElementById('btn')
      btn.addEventListener('click', function (e) {
        if (newObj.innerHTML) {
          newTmep.push(newObj.innerHTML)
        }
      })
      const newTmep = new Proxy(temp, {
        get: function (target, key) {
          return Reflect.get(target, key)
        },
        set: function (target, key, value) {
          console.log(target, key, value)
          if (key !== 'length') {
            renderTemp(value)
          }
          return Reflect.set(target, key, value)
        }
      })
      function renderTemp (val) {
        const tempDom = document.createElement('li')
        tempDom.innerHTML = val
        document.getElementsByTagName('ul')[0].appendChild(tempDom)
        newObj.innerHTML = ''
      }
    })
    const data = reactive({
    })

    return {
      data
    }
  }
}
</script>
