<template>
  <div>
    <component
        :is="resData"
        v-bind="$attrs"
        v-on="$listeners"
        is_remote="true"
      >
    </component>
  </div>
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
      const res = await Axios.get("http://wd-local.com/HelloWorld.iife.css.js", {}, { baseUrl: '//' })
      this.resData = new Function(`${res.data};return helloWorld;`)()  // eslint-disable-line
    }
  }
</script>