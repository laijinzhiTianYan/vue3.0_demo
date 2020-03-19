<!--
 * @Author: shiwh
 * @Date: 2020-03-19 09:23:52
 * @LastEditors: shiwh
 * @LastEditTime: 2020-03-19 09:29:21
 * @Description:
 -->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
