<template>
  <div class="dialog" v-if="dialogStatus">
    <div class="dialog-body" >
      <div class="close-line">
        <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
          <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
          </svg>
        </button>
      </div>

      <div class="type warning">WARN</div>
      <div class="message">当前页面已失效.</div>

      <div class="button-line">
        <div>cancel</div>
        <div>continue</div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Dialog",
    data() {
      return {
        closeCallback: function () {
          this.$router.replace("/forget");
        },
        dialogStatus: true,
        dialog: false,
        timeout: 1000,
      }
    },
    methods: {
      closeDialog() {
        this.dialogStatus = false;
      }
    },
    created() {
      let _that = this;
      setTimeout(() => _that.dialog = true, 50);


      // 在指定秒后执行关闭函数, 此时我们会执行关闭时执行的函数
      setTimeout(() => {
        _that.closeDialog();
        _that.closeCallback.call(_that);
      }, _that.timeout * 1000);
    }
  }
</script>

<style lang="scss" scoped>
  .dialog {
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-color: #bbb;
    display: flex;
    align-items: center;

    .dialog-body {
      margin: 0 auto;
      width: 300px;
      height: 150px;
      border: 1px solid #eee;
      box-shadow: 0 5px 15px -5px rgba(176, 222, 211, 0.89);
      padding: 10px;
      background-color: #fff;

      .close-line {
        margin: 0 auto;
        height: 25px;

        .flash-close {
          float: right;
          padding: 16px;
          margin: -16px;
          margin-top: -12px;
          text-align: center;
          cursor: pointer;
          background: none;
          border: 0;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          color: #d43c1a;
          outline: none;
        }
      }

      .type {
        font-size: 25px;
        letter-spacing: -4px;
        font-weight: 600;
      }

      .error {
        color: #b70000;
      }

      .warning {
        color: #f65e00;
        text-shadow: 0 2px 4px #e9e2bb, 0px -2px 1px #fff199;

      }

      .message {
        margin: 15px auto;
        font-weight: 400;
        color: #bbb;
        font-size: 14px;
      }

      .button-line {
        width: 180px;
        margin: 20px auto;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
          height: 25px;
          line-height: 25px;
          font-size: 15px;
          cursor: pointer;
          width: 70px;
          color: #009fff;
          transition-property:all;
          transition-duration:0.25s;
        }

        div:hover {
          width: 80px;
          height: 30px;
          font-size: 16px;
          line-height: 30px;
          background-color: #009fff;
          color: #fff;
          -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 60px #93c0ff inset;
          -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 40px #64d1ff inset;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 40px #8cbfff inset;
        }
      }
    }
  }


</style>
