<template>
  <div class="dialog" v-if="dialog.status" :style="{width: appWidth + 'px', height: appHeight + 'px'}">
    <div class="dialog-body">
      <div class="close-line">
        <div class="block close" @click="closeDialog"></div>
      </div>

      <div :class="{type:true, error: dialog.type === 'ERROR', warning: dialog.type === 'WARN', success: dialog.type === 'SUCCESS'}">
        {{dialog.type}}
      </div>
      <div class="message">{{dialog.message}}</div>

      <div class="button-line" v-if="dialog.cancel != null && dialog.continue!= null">
        <div @click="dialog.cancel">取消</div>
        <div @click="dialog.continue">继续</div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "Dialog",
    data() {
      return {
        timeout: 5000,
        allowZoom: false,
        cancelStatus: false,
        nextStatus: false
      }
    },
    methods: {
      closeDialog() {
        this.$store.dispatch('hideDialog');
        this.$router.go(-1);
      },
      cancel() {
        this.nextStatus = false;
        this.cancelStatus = true;
      },
      next() {
        this.nextStatus = true;
        this.cancelStatus = false;
      }
    },
    computed: {
      ...mapState(['appWidth', 'appHeight', 'dialog'])
    },
    created() {
      let _that = this;

      // 在指定秒后执行关闭函数, 此时我们会执行关闭时执行的函数
      setTimeout(function () {
        _that.$store.dispatch('hideDialog');
      }, _that.timeout * 1000);
    }
  }
</script>

<style lang="scss" scoped>
  .dialog {
    top: 0px;
    position: fixed;
    filter: Alpha(opacity=50);
    background-color: #fff;
    display: flex;
    align-items: center;

    .dialog-body {
      color: #fff;
      margin: 0 auto;
      width: 300px;
      height: 150px;
      border-radius: 5px;
      border: 1px solid #eee;
      box-shadow: 0 5px 15px -5px rgba(50, 49, 40, 0.99);
      background-color: #3c3c3c;
      transition: width 2s, height 2s;

      .close-line {
        border-radius: 5px 5px 0 0;
        background-color: #272626;
        margin: 0 auto;
        height: 25px;
        text-align: left;
        padding: 0 10px;

        .block {
          display: inline-block;
          width: 12px;
          margin-right: 3px;
          height: 12px;
          margin-top: 5px;
          cursor: pointer;
          border-radius: 50%;
          border: 1px solid #3c3c3c;
          box-shadow: 0 1px 1px -1px #3c3c3c;
        }

        .close {
          background-color: #ff0000;
        }
      }

      .type {
        margin-top: 10px;
        font-size: 24px;
        letter-spacing: -2px;
        font-weight: 600;
      }

      .error {
        color: #ff0000;
      }

      .warning {
        color: #f6600a;
      }

      .success {
        color: #c5ff00;
      }

      .message {
        margin: 13px auto;
        font-weight: 400;
        color: #bbb;
        letter-spacing: -1px;
        font-size: 13px;
      }

      .button-line {
        width: 180px;
        margin: 5px auto;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
          width: 80px;
          height: 20px;
          line-height: 20px;
          font-size: 15px;
          color: #fff;
          font-weight: 400;
          cursor: pointer;
          text-align: center;
        }

        div:hover {
          color: #f6600a;
        }
      }
    }
  }


</style>
