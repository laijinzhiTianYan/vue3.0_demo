<!--
 * @Author: shiwh
 * @Date: 2020-03-19 09:23:52
 * @LastEditors: shiwh
 * @LastEditTime: 2020-03-19 11:24:59
 * @Description:
 -->
<template>
  <div class="hello">
    <!-- <proxy-demo></proxy-demo> -->
    <!-- <demo v-bind="{...this.$props}"></demo> -->
    <!-- <ref-demo></ref-demo> -->
    <!-- <watch-computed></watch-computed> -->
    <provide-refs></provide-refs>
  </div>
</template>

<script>
// import proxy from './proxy'
// import demo from './demo'
// import refDemo from './ref-demo'
// import watchComputed from './watch-computed'
import provideRefs from './provide-refs'
export default {
  name: 'HelloWorld',
  components: {
    // 'proxy-demo': proxy
    // demo,
    // 'ref-demo': refDemo,
    // 'watch-computed': watchComputed
    'provide-refs': provideRefs
  },
  props: {
    msg: String
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
