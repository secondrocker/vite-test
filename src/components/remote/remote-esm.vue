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
  import helloWorld from 'http://my-local.com/static/js/remote/HelloWorld.es.js'
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