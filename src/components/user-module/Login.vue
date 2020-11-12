<template>
  <div class="login">
    <div class="login-icon">
      <img src="../../assets/stool.png"/>
    </div>
    <div class="form">
      <div class="login-title">Sign in to STool</div>

      <div class="login-error">
        用户名称不能为空
        <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
          <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
        </button>
      </div>

      <div class="form-login">
        <label for="username">username or email address</label>
        <input type="text" name="login" id="username" class="form-control input-block" tabindex="1" autocomplete="username" autofocus="autofocus" spellcheck="false" />

        <label for="password">password
          <a class="label-link" href="/password_reset">forget password?</a>
        </label>
        <input type="password" name="password" id="password" class="form-control input-block" tabindex="2" autocomplete="current-password"/>
        <input type="submit" name="commit" value="Sign in" tabindex="3" class="btn btn-primary btn-block" data-disable-with="Signing in…">
      </div>

      <p class="login-callout mt-3">
          New to STool?
          <a data-ga-click="Sign in, switch to sign up" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;sign in switch to sign up&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/login&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="72d062e79bb6ab076a3b88b32943286ea51894183bd812a5038d00013946f239" href="/join?source=login">Create an account</a>.
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
        // 账号
        username: '',

        // 邮箱
        email: '',

        // 密码
        password: '',

        // 邮箱验证码
        verificationCode: ''
      }
    },
    created() {
      let _that = this;
      setTimeout(function() {
        _that.$hideLoading(_that)
      }, 500);
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    position: absolute;
    width: 100%;
    min-width: 800px;
    height: 100%;
    margin: 0 auto;
    background-color: #f9f9f9;

    .login-icon {
      padding-top: 20px;
      width: 50px;
      height: 50px;
      margin: 20px auto;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .form {
      width: 340px;
      margin: 10px auto;

      .login-title {
        font-size: 26px;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        letter-spacing: -.5px;
        font-weight: 300;
      }

      .login-error {
        margin-top: 10px;
        padding: 10px;
        font-size: 15px;
        border: 1px solid #9e1c2333;
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
            float:right;
            color: #009fff;
            font-weight: bolder;
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
          border-radius: 6px;
          outline: none;
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
          background-color: #2ea44f;
          padding: 8px 16px;
          font-size: 18px;
          font-weight: 500;
          line-height: 20px;
          white-space: nowrap;
          vertical-align: middle;
          cursor: pointer;
          border-radius: 6px;
          border: 1px solid #1b1f2326;
          outline: none;
        }
      }

      .login-callout {
        padding: 15px 20px;
        text-align: center;
        border: 1px solid #d8dee2;
        border-radius: 5px;
        margin-top: 16px!important;
        background-color: #fff;
        font-weight: 500;
      }
    }
  }


</style>

