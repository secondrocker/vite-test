<template>
  <h1>Hi from <span class="color">{{ msg }}</span></h1>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'there'
    }
  },
  name: 'helloWorld'
}
</script>
<style scoped>
.color {
  color: red;
}
</style>