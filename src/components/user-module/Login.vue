<template>
  <div class="login">
    <div class="form" :style="{height: validation ? '410px' : '360px'}">
      <div class="login-title">Sign in to STool</div>

      <div class="login-error" :class="{'show-error': validation}" :style="{height: validation ? '20px' : '0px'}">
        {{validationMessage}}
        <button @click="clearValidationMessage" v-if="validation" class="flash-close js-flash-close" type="button"
                aria-label="Dismiss this message">
          <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
          </svg>
        </button>
      </div>

      <div class="form-login">
        <label for="username">username or email address</label>
        <input type="text" @blur="validationUsername" v-model="username" name="login" id="username"
               class="form-control input-block" tabindex="1"
               autocomplete="username" spellcheck="false"/>

        <label for="password">password
          <a class="label-link" href="/password_reset">forget password?</a>
        </label>
        <input type="password" @blur="validationPassword" v-model="password" name="password" id="password"
               class="form-control input-block" tabindex="2"
               autocomplete="current-password"/>

        <input type="submit" :disabled="!buttonStatus" @click="login" name="commit" :value="buttonStatus ? 'Sign in' : `${seconds}秒后可使用`" tabindex="3" class="btn btn-primary btn-block"
               :style="{backgroundColor: buttonStatus ? '#009fff' : '#8b9092'}" data-disable-with="Signing in…">
      </div>

      <p class="login-callout mt-3">
        New to STool?
        <a data-ga-click="Sign in, switch to sign up"
           data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;sign in switch to sign up&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/login&quot;,&quot;user_id&quot;:null}}"
           data-hydro-click-hmac="72d062e79bb6ab076a3b88b32943286ea51894183bd812a5038d00013946f239"
           href="/join?source=login">Create an account</a>.
      </p>
    </div>
  </div>
</template>

<script>

  /**
   * 加载动画组件
   */
  export default {
    name: 'Login',
    data() {
      return {
        // 按钮是否激活, 默认激活
        buttonStatus: true,
        // 按钮剩余冷却时间
        seconds: 0,
        // 账号
        username: '',
        // 密码
        password: '',
        // 效验信息
        validationMessage: '',
      }
    },
    created() {
      this.$store.dispatch('showLoading');
    },
    methods: {
      clearValidationMessage() {
        this.validationMessage = '';
      },
      validationUsername() {
        if (this.username.trim().length === 0) {
          this.validationMessage = '用户名不能为空';
          return false;
        }
        return true;
      },
      validationPassword() {
        if (this.password.trim().length === 0) {
          this.validationMessage = '密码不能为空';
          return false;
        } else if (this.password.trim().length < 6) {
          this.validationMessage = '密码不能低于6位';
          return false;
        }
        return true;
      },
      login() {
        if (this.validationUsername() && this.validationPassword()) {
          this.validationMessage = '';
          // 冷却按钮, 避免重复表单登录
          this.buttonStatus = false;
          // 默认 60s 冷却时间
          this.seconds = 30;

          let _that = this;
          // 激活计时器
          let interval = setInterval(() => {
            if(_that.seconds <= 0) {
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
  .login {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #092756;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -moz-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -webkit-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -o-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -ms-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), linear-gradient(to bottom, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), linear-gradient(135deg, #670d10 0%, #092756 100%);

    .form {
      border: 1px solid #323232;
      width: 340px;
      transition: height 0.3s;
      margin: 10px auto;
      padding: 10px;
      box-shadow: 0 5px 15px -5px rgba(176, 222, 211, 0.89);
      background-color: #f9f9f9;


      .login-title {
        font-size: 26px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        letter-spacing: -.5px;
        font-weight: 400;
      }

      .login-error:hover {
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 60px #FFE9D4 inset;
        -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 40px #FFE9D4 inset;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 40px #FFE9D4 inset;
      }

      .show-error {
        border: 1px solid #9e1c2333;
        padding: 7px 10px;
      }

      .login-error {
        transition: height 0.25s;
        margin: 10px auto;
        font-size: 15px;
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

      .form-login:hover {
        -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.1) inset;
        -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
      }

      .form-login {
        margin-top: 10px;
        padding: 20px;
        font-size: 15px;
        background-color: #fff;
        border: 1px solid #d8dee2;

        label {
          display: block;
          margin-bottom: 5px;
          font-size: 18px;
          text-align: left;
          font-weight: 500;

          a {
            float: right;
            color: #009fff;
          }
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
          padding: 8px 16px;
          font-size: 18px;
          font-weight: 500;
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

