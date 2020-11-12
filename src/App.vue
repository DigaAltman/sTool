<template>
  <div id="app" :style="{display: loadingStatus ? 'none' : 'block'}">
      <router-view/>
  </div>
</template>

<script>

  import {mapState} from "vuex";

  export default {
    name: 'App',
    computed: {
      ...mapState(['loadingStatus'])
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    color: #2c3e50;
  }
</style>
