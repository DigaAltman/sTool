<template>
  <div id="app" :style="{width: appWidth + 'px', height: appHeight + 'px'}">
    <router-view/>
    <loading/>
    <dia-log/>
  </div>
</template>

<script>

  import {mapState} from "vuex";
  import Loading from "./components/common-component/Loading.vue";
  import Dialog from "./components/common-component/Dialog";

  export default {
    name: 'App',
    components: {
      Loading,
      'dia-log': Dialog
    },
    computed: {
      ...mapState(['loadingStatus', 'appWidth', 'appHeight'])
    },
    mounted() {
      window.onresize = () => {
        return (() => {
          this.$store.commit('bodyWidthMutations', document.body.clientWidth);
          this.$store.commit('bodyHeightMutations', window.innerHeight);
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
    transition: width 0.25s, height 0.25s;
    position: relative;
    text-align: center;
    color: #2c3e50;
  }
</style>
