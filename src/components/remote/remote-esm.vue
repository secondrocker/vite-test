<template>
  <component
      :is="resData"
      v-bind="$attrs"
      v-on="$listeners"
      is_remote="true"
    >
  </component>
</template>
<script>
  // 直接 从 远程esm 文件 引入
  import helloWorld from 'http://wd-local.com/HelloWorld.es.js'
  export default {
    data () {
      return {
        resData: {}
      }
    },
    async mounted () {
      this.resData = helloWorld
    }
  }
</script>