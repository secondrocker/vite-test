<script setup>
import HelloWorldIife from './components/remote/remote-iife.vue'
import HelloWorldIifeCss from './components/remote/remote-iife-css.vue'
import HelloWorldUmd from './components/remote/remote-umd.vue'
import HelloWorldEsm from './components/remote/remote-esm.vue'
</script>

<template>
  <HelloWorldIife msg="iife" />
  <HelloWorldIifeCss msg="iife-css" />
  <HelloWorldUmd msg="umd" />
  <HelloWorldUmdRequire msg="umd-import" />
  <HelloWorldEsm msg="esm" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
