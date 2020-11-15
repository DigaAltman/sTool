<template>
  <div class="register">

    <!-- 注册表单 -->
    <div class="register-from" :style="{height: validation ? '570px' : '520px'}">

      <div class="register-title">Create your a account</div>

      <div class="register-error" :class="{'show-error': validation}" :style="{height: validation ? '15px' : '0px'}">
        {{validationMessage}}
        <button v-if="validation" @click="clearValidationMessage" class="flash-close js-flash-close" type="button"
                aria-label="Dismiss this message">
          <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
          </svg>
        </button>
      </div>

      <!-- 用户名 -->
      <label for="username">Username</label>
      <input class="form-control" @blur="validationDataModel('username')" v-model="username" type="text" id="username"
             autocomplete="username" spellcheck="false" placeholder="用户名"/>

      <!-- 密码 -->
      <label for="password">Password</label>
      <input class="form-control" @blur="validationDataModel('password')" v-model="password" type="password"
             id="password" placeholder="密码的不能低于6位, 不能高于15位"/>

      <!-- 确认密码 -->
      <label for="confirmPassword">Confirm Password</label>
      <input class="form-control" @blur="validationDataModel('confirmPassword')" v-model="confirmPassword"
             type="password" id="confirmPassword" placeholder="必须保证和上次的密码一致"/>

      <!-- 邮箱 -->
      <label for="email">Email</label>
      <input class="form-control" @blur="validationDataModel('email')" v-model="email" type="email" id="email"
             spellcheck="false" placeholder="请保证邮箱的可靠性,必须没有被使用"/>

      <!-- 用户昵称 -->
      <label for="nickname">Nickname</label>
      <input class="form-control" @blur="validationDataModel('nickname')" v-model="nickname" type="nickname"
             id="nickname" spellcheck="false" placeholder="用户的昵称,默认昵称是用户ID"/>

      <!-- 注册按钮 -->
      <input type="submit"  :disabled="!buttonStatus" @click="register" name="commit" :value="buttonStatus ? 'Create account' : `${seconds}秒后可使用` " tabindex="3" class="btn btn-primary btn-block"
             :style="{backgroundColor: buttonStatus ? '#009fff' : '#8b9092'}"
             data-disable-with="Signing in…">

      <p class="login-callout mt-3">
        Registered successfully?
        <router-link  to="/login">Sign in...</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import HttpRequestService from "../../service/HttpRequestService";
  import {
    ERROR,
    SUCCESS
  } from '../../common/DialogCommon';

  /**
   * 加载动画组件
   */
  export default {
    name: 'Register',
    data() {
      return {
        // 按钮是否激活, 默认激活
        buttonStatus: true,
        // 按钮剩余冷却时间
        seconds: 0,


        // 用户名称
        username: '',

        // 密码
        password: '',

        // 确认密码
        confirmPassword: '',

        // 邮箱
        email: '',

        // 昵称
        nickname: '',

        validationMessage: ''
      }
    },
    methods: {
      clearValidationMessage() {
        this.validationMessage = '';
      },
      validationDataModel(type) {
        let {username, password, confirmPassword, email} = this;
        switch (type) {
          case 'username':
            if (username.trim().length === 0) {
              this.validationMessage = '用户名不能为空';
            }

            // TODO 判断用户名称是否已经被注册


            return false;

          case 'password':
          case 'confirmPassword':
            if (password.trim().length === 0 || confirmPassword.trim().length === 0) {
              this.validationMessage = '密码不能为空';
            }
            if (password.trim().length < 6 || confirmPassword.trim().length < 6) {
              this.validationMessage = '密码不能小于6位';
            }
            return false;

          case 'email':
            if (email.trim().length > 0 && !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email.trim())) {
              this.validationMessage = "邮箱格式不正确"
            }

            // TODO 判断昵称是否已经被注册


            return false;
        }

        this.validationMessage = '';
        return true;
      },
      register() {

        if(this.validationDataModel('username') && this.validationDataModel('password') && this.validationDataModel('confirmPassword')  && this.validationDataModel('email')) {
          this.validationMessage = '';
          // 冷却按钮, 避免重复表单登录
          this.buttonStatus = false;
          // 默认 60s 冷却时间
          this.seconds = 30;

          let _that = this;

          let params = {
            username: _that.username,
            password: _that.password,
            confirmPassword: _that.confirmPassword
          };

          _that.email && (params.email = _that.email);
          _that.nickname && (params.nickname = _that.nickname);

          // 请求后端服务
          HttpRequestService.post({
            url: '/api/user/register',
            params,
            loading() {
              _that.$store.dispatch('showLoading');
            },
            success(response) {
              _that.$store.dispatch('hideLoading');
              SUCCESS.message = response.message;
              _that.$store.dispatch('showDialog', SUCCESS)
            },
            server(response) {
              _that.$store.dispatch('hideLoading');
              ERROR.message = response.message;
              _that.$store.dispatch('showDialog', ERROR)
            },
            error: function() {
              _that.$store.dispatch('hideLoading');
              ERROR.message = '无法请求服务器, 请检查您的网络连接';
              _that.$store.dispatch('showDialog', ERROR);
            }
          });


          // 激活计时器
          let interval = setInterval(() => {
            if(_that.seconds === 0) {
              _that.buttonStatus = true;
              clearInterval(interval);
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
      transition: height 0.3s;
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

      .show-error {
        border: 1px solid #9e1c2333;
        padding: 5px 10px;
      }

      .register-error:hover {
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 60px #FFE9D4 inset;
        -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 40px #FFE9D4 inset;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 40px #FFE9D4 inset;
      }

      .register-error {
        transition: height 0.25s;
        margin: 10px auto;
        font-size: 13px;
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

