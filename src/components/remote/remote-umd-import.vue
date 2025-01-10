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
  export default {
    data () {
      return {
        resData: {}
      }
    },
    async mounted () {
      this.resData = await import('http://localhost:5173/HelloWorld.umd.js')
      this.resData = window.helloWorld
    }
  }
</script>