<template>
  <div id="app" :style="{width: appWidth + 'px', height: appHeight + 'px'}">
    <router-view/>
    <loading/>
  </div>
</template>

<script>

  import {mapState} from "vuex";
  import Loading from "./components/common-component/Loading.vue";

  export default {
    name: 'App',
    components: {Loading},
    computed: {
      ...mapState(['loadingStatus', 'appWidth', 'appHeight'])
    },
    mounted() {
      window.onresize = () => {
        return (() => {
          this.$store.commit('bodyWidthMutations', document.body.clientWidth);
          this.$store.commit('bodyHeightMutations', document.body.clientHeight);
        })()
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 auto;
    height: 600px;
    position: relative;
    text-align: center;
    color: #2c3e50;
  }
</style>
