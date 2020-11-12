<template>
  <div class="dialog">
    <div class="dialog-body" v-html="body" :style="{height:dialog ? '200px' : '0'}"></div>
  </div>
</template>

<script>
  export default {
    name: "Dialog",
    data() {
      return {
        dialog: false,
        timeout: 3,
        body: '<h1>当前页面无效!!</h1>'
      }
    },
    created() {
      let _that = this;
      setTimeout(() => _that.dialog = true, 50);


      // 在指定秒后执行关闭函数, 此时我们会执行关闭时执行的函数
      setTimeout(() => {

        _that.close();
      }, _that.timeout * 1000);
    }
  }
</script>

<style lang="scss" scoped>
  .dialog {
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-color: #323232;
    display: flex;
    align-items: center;

    .dialog-body {
      transition: height 1s;
      margin: 0 auto;
      width: 300px;
      background-color: #f9f9f9;
    }
  }


</style>
