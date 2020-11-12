<template>
  <div class="forget">
    <div class="form">
      <div class="forget-title">Reset your password</div>

      <div class="forget-error" :class="{'show-error': validation}" :style="{height: validation ? '20px' : '0px'}">
        {{validationMessage}}
        <button @click="clearValidationMessage" v-if="validation" class="flash-close js-flash-close" type="button"
                aria-label="Dismiss this message">
          <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
          </svg>
        </button>
      </div>

      <div class="form-reset">
        <label for="username">输入您的用户帐户的已验证电子邮件地址，我们将向您发送密码重置链接.</label>
        <input type="text" v-model="account" id="username" @blur="validationAccount" class="form-control input-block"
               tabindex="1" autocomplete="username" autofocus="autofocus" spellcheck="false"
               placeholder="email:邮箱号码 | username:用户号码"/>
        <input type="submit" :disabled="!buttonStatus" @click="forget" name="commit" :value="buttonStatus ? '获取激活码' : `${seconds}秒后可使用`"
               :style="{backgroundColor: buttonStatus ? '#009fff' : '#8b9092'}"
               tabindex="3" class="btn btn-primary btn-block"
               data-disable-with="Signing in…">
      </div>

      <p class="login-callout mt-3">
        got your password back?
        <router-link to="/login">Login in</router-link>
      </p>
    </div>
  </div>
</template>

<script>

  /**
   * 加载动画组件
   */
  export default {
    name: 'Forget',
    data() {
      return {
        // 按钮是否激活, 默认激活
        buttonStatus: true,
        // 按钮剩余冷却时间
        seconds: 0,
        // 账户名称
        account: '',
        // 效验信息
        validationMessage: '',
      }
    },
    methods: {
      validationAccount() {
        if (this.account.trim().length === 0) {
          this.validationMessage = '账户内容不能为空';
          return false;
        } else if (!this.account.trim().startsWith("email:") && !this.account.trim().startsWith("username:")) {
          this.validationMessage = '账户类型标识不能为空';
          return false;
        }
        this.validationMessage = '';
        return true;
      },
      clearValidationMessage() {
        this.validationMessage = '';
      },
      forget() {
        if (this.validationAccount()) {
          this.validationMessage = '';
          // 冷却按钮, 避免重复表单登录
          this.buttonStatus = false;
          // 默认 60s 冷却时间
          this.seconds = 30;

          let _that = this;
          // 激活计时器
          let interval = setInterval(() => {
            if(_that.seconds === 0) {
              _that.buttonStatus = true;
              clearInterval(interval)
            }
            _that.seconds --;
          }, 1000);
        }
      }
    },
    computed: {
      validation() {
        return this.validationMessage.length > 0;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .forget {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #092756;
    background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -moz-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -webkit-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -o-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -ms-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), linear-gradient(to bottom, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), linear-gradient(135deg, #670d10 0%, #092756 100%);

    .form {
      width: 340px;
      margin: 0 auto;
      box-shadow: 0 5px 15px -5px rgba(176, 222, 211, 0.89);
      background-color: #f9f9f9;
      padding: 10px;
      border: 1px solid #323232;
      transition: height 0.3s;

      .forget-title {
        font-size: 26px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        letter-spacing: -.5px;
        font-weight: 400;
      }

      .forget-error:hover {
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 60px #FFE9D4 inset;
        -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 40px #FFE9D4 inset;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 40px #FFE9D4 inset;
      }

      .show-error {
        border: 1px solid #9e1c2333;
        padding: 5px 10px;
      }

      .forget-error {
        transition: height 0.25s;
        margin-top: 10px;
        font-size: 13px;
        background-color: #ffe3e6;

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
          color: #9e1c2399;
          outline: none;
        }
      }

      .form-reset:hover {
        -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.1) inset;
        -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
      }

      .form-reset {
        margin-top: 10px;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #d8dee2;

        label {
          display: block;
          margin-bottom: 5px;
          font-size: 14px;
          text-align: left;
          font-weight: 500;
        }


        .form-control {
          width: 96%;
          min-width: 150px;
          padding: 5px 5px;
          font-size: 14px;
          line-height: 20px;
          color: #24292e;
          vertical-align: middle;
          background-color: #fff;
          background-repeat: no-repeat;
          background-position: right 8px center;
          border: 1px solid #e1e4e8;
          outline-color: #009fff;
          box-shadow: #bbb;
          margin-bottom: 15px;
        }

        .btn {
          margin-top: 10px;
          position: relative;
          width: 100%;
          text-align: center;
          display: block;
          color: #fff;
          background-color: #009fff;
          padding: 8px 16px;
          font-size: 16px;
          font-weight: bolder;
          line-height: 20px;
          white-space: nowrap;
          vertical-align: middle;
          cursor: pointer;
          border: 1px solid #1b1f2326;
          outline: none;
        }
      }

      .login-callout {
        padding: 10px 20px;
        text-align: center;
        border: 1px solid #d8dee2;
        margin-top: 16px !important;
        background-color: #fff;
        font-weight: 500;
      }

      .login-callout:hover {
        -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.1) inset;
        -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
      }
    }
  }


</style>

