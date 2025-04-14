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
      const res = await Axios.get("http://wd-local.com/HelloWorld.umd.js", {}, { baseUrl: '//' })
      new Function(`${res.data}`)()  // eslint-disable-line
      this.resData = window.helloWorld
    }
  }
</script>