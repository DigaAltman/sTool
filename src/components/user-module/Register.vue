<template>
  <div class="register">

    <!-- 注册表单 -->
    <div class="register-from">

      <div class="register-title">Create your a account</div>

      <div class="register-error">
        用户名不能为空!!
        <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
          <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
          </svg>
        </button>
      </div>

      <!-- 用户名 -->
      <label for="username">Username</label>
      <input class="form-control" type="text" id="username" autocomplete="username" autofocus="autofocus"
             spellcheck="false" placeholder="用户名"/>

      <!-- 密码 -->
      <label for="password">Password</label>
      <input class="form-control" type="password" id="password" autofocus="autofocus" placeholder="密码的不能低于6位, 不能高于15位"/>

      <!-- 确认密码 -->
      <label for="confirmPassword">Confirm Password</label>
      <input class="form-control" type="password" id="confirmPassword" autofocus="autofocus"
             placeholder="必须保证和上次的密码一致"/>

      <!-- 邮箱 -->
      <label for="email">Email</label>
      <input class="form-control" type="email" id="email" autofocus="autofocus" spellcheck="false"
             placeholder="请保证邮箱的可靠性,必须没有被使用"/>

      <!-- 用户昵称 -->
      <label for="nickname">Nickname</label>
      <input class="form-control" type="nickname" id="nickname" autofocus="autofocus" spellcheck="false"
             placeholder="用户的昵称,默认昵称是用户ID"/>

      <!-- 注册按钮 -->
      <input type="submit" name="commit" value="Create account" tabindex="3" class="btn btn-primary btn-block"
             data-disable-with="Signing in…">

      <p class="login-callout mt-3">
        Registered successfully?
        <a data-ga-click="Sign in, switch to sign up"
           data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;sign in switch to sign up&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/login&quot;,&quot;user_id&quot;:null}}"
           data-hydro-click-hmac="72d062e79bb6ab076a3b88b32943286ea51894183bd812a5038d00013946f239"
           href="/join?source=login">Sign in...</a>.
      </p>
    </div>
  </div>
</template>

<script>

  /**
   * 加载动画组件
   */
  export default {
    name: 'Register',
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        nickname: ''
      }
    },
    created() {

    }
  }
</script>

<style lang="scss" scoped>
  .register {
    background: #092756;
    background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -moz-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -webkit-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -o-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -ms-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), linear-gradient(to bottom, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), linear-gradient(135deg, #670d10 0%, #092756 100%);

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .register-from {
      margin: 0 auto;
      width: 400px;
      box-shadow: 0 2px 10px -2px rgba(176, 222, 211, 0.89);
      background-color: #f9f9f9;
      padding: 20px;

      .register-title {
        margin-bottom: 16px !important;
        font-weight: 500;
        font-size: 25px;
      }

      .register-error:hover {
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 60px #FFE9D4 inset;
        -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 40px #FFE9D4 inset;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 40px #FFE9D4 inset;
      }

      .register-error {
        margin: 10px auto;
        padding: 5px 10px;
        font-size: 13px;
        border: 1px solid #9e1c2333;
        background-color: #ffe3e6;

        .flash-close {
          float: right;
          padding: 13px;
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

      label {
        display: block;
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 500;
        text-align: left;
      }

      .form-control {
        width: 100%;
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
        box-sizing: border-box;
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
        background-color: #2188ff;
        padding: 10px 16px;
        font-size: 20px;
        font-weight: 500;
        line-height: 20px;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid #fff;
        outline: none;
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









  .other {
    margin: 20px auto;
    width: 70%;
    font-size: 15px;
    min-width: 720px;
    text-align: left;
  }
</style>

