<template>
  <div class="reset">
    <div class="reset-form">
      <div class="reset-title">Reset Password</div>

      <div class="reset-error" :class="{'show-error': validation}" :style="{height: validation ? '20px' : '0px'}">
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
        <!-- 密码 -->
        <label for="password">Password</label>
        <input class="form-control" @blur="validationDataModel('password')" v-model="password" type="password"
               id="password" placeholder="重置密码"/>

        <!-- 确认密码 -->
        <label for="confirmPassword">Confirm Password</label>
        <input class="form-control" @blur="validationDataModel('confirmPassword')" v-model="confirmPassword"
               type="password" id="confirmPassword" placeholder="再次确认新密码"/>

        <input type="submit" :disabled="!buttonStatus" @click="reset" name="commit"
               :value="buttonStatus ? 'Reset Password' : `${seconds}秒后可使用`" tabindex="3"
               class="btn btn-primary btn-block"
               :style="{backgroundColor: buttonStatus ? '#009fff' : '#8b9092'}" data-disable-with="Signing in…"/>
      </div>

    </div>
  </div>
</template>

<script>
  import urlService from "../../service/UrlService";

  export default {
    name: "Reset",
    data() {
      return {
        seconds: 0,
        buttonStatus: true,
        // 效验信息
        validationMessage: '密码不能少于6位',
        password: '',
        confirmPassword: ''
      }
    },
    created() {
      let {token} = urlService.getSearchParams(window.location.href)
      if (token != null || token.trim().length > 0) {

      } else {
        alert('当前链接未激活');
      }
    },
    methods: {
      clearValidationMessage() {
        this.validationMessage = '';
      },
      validationDataModel(type) {
        if (type === 'password') {
          if (this.password.trim().length === 0) {
            this.validationMessage = '密码不能为空';
            return false;
          } else if (this.password.trim().length < 6 || this.password.trim().length > 15) {
            this.validationMessage = '密码长度不能低于6位高于15位';
            return false;
          }
        } else if (type === 'confirmPassword') {
          if (this.confirmPassword.trim().length === 0) {
            this.validationMessage = '确认密码不能为空';
            return false;
          } else if (this.confirmPassword.trim().length < 6 || this.confirmPassword.trim().length > 15) {
            this.validationMessage = '确认密码长度不能低于6位高于15位';
            return false;
          }
          return true;
        }
        this.validationMessage = '';
        return true;
      },
      reset() {
        if (this.validationDataModel('password') && this.validationDataModel('confirmPassword')) {
          this.validationMessage = '';
          // 冷却按钮, 避免重复表单登录
          this.buttonStatus = false;
          // 默认 60s 冷却时间
          this.seconds = 30;

          let _that = this;
          // 激活计时器
          let interval = setInterval(() => {
            if (_that.seconds === 0) {
              _that.buttonStatus = true;
              clearInterval(interval);
            }
            _that.seconds--;
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
  .reset {
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

    .reset-form {
      border: 1px solid #323232;
      width: 340px;
      transition: height 0.3s;
      margin: 0 auto;
      padding: 10px;
      box-shadow: 0 5px 15px -5px rgba(176, 222, 211, 0.89);
      background-color: #f9f9f9;

      .reset-title {
        font-size: 26px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        letter-spacing: -.5px;
        font-weight: 400;
      }

      .reset-error:hover {
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 60px #FFE9D4 inset;
        -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 40px #FFE9D4 inset;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 40px #FFE9D4 inset;
      }

      .show-error {
        border: 1px solid #9e1c2333;
        padding: 7px 10px;
      }

      .reset-error {
        transition: height 0.25s;
        margin: 10px auto;
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
    }

    .form-reset:hover {
      -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.1) inset;
      -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    }

    .form-reset {
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
  }
</style>
