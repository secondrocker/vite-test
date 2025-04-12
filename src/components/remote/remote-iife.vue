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
  import Axios from 'axios'
  export default {
    data () {
      return {
        resData: {}
      }
    },
    async mounted () {
      const res = await Axios.get("http://my-local.com/static/js/remote/HelloWorld.iife.js", {}, { baseUrl: '//' })
      this.resData = new Function(`${res.data};return helloWorld;`)()  // eslint-disable-line
    }
  }
</script>