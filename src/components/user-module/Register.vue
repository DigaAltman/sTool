<template>
  <div class="register">
    <div class="register-title">Create your a account</div>
    
    
    <!-- 注册表单 -->
    <div class="register-from">
        <div class="register-error">
          用户名不能为空!!
          <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
              <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
            </button>
        </div>

        <!-- 用户名 -->
        <label for="username">Username</label>
        <input class="form-control" type="text" id="username" autocomplete="username" autofocus="autofocus" spellcheck="false" placeholder="用户名" />

        <!-- 密码 -->
        <label for="password">Password</label>
        <input class="form-control" type="password" id="password" autofocus="autofocus" placeholder="密码的不能低于6位, 不能高于15位" />

        <!-- 确认密码 -->
        <label for="confirmPassword">Confirm Password</label>
        <input class="form-control" type="password" id="confirmPassword" autofocus="autofocus" placeholder="必须保证和上次的密码一致" />

        <!-- 邮箱 -->
        <label for="email">Email</label>
        <input class="form-control" type="email" id="email" autofocus="autofocus" spellcheck="false" placeholder="请保证邮箱的可靠性,必须没有被使用" />

        <!-- 用户昵称 -->
        <label for="nickname">Nickname</label>
        <input class="form-control" type="nickname" id="nickname" autofocus="autofocus" spellcheck="false" placeholder="用户的昵称,默认昵称是用户ID" />

        <!-- 注册按钮 -->
        <input type="submit" name="commit" value="Create account" tabindex="3" class="btn btn-primary btn-block" data-disable-with="Signing in…">
    </div>

    <div class="other">
        创建账户表示你同意 <a href="/server">服务条款</a>. 有关 STool 隐私惯例的更多信息,请参阅 <a href="/detail">STool隐私声明</a> ,我们会及时向您发送账户相关的电子邮件
    </div>
  </div>
</template>

<script>
  import http from '@/http';

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

<style scoped>
  .register {
    width: 100%;
    height: 100%;
  }

  .register-title {
    margin-bottom: 16px!important;
    font-weight: 500;
    font-size: 35px;
  }

  .register-from {
    margin: 0 auto;
    width: 70%;
    min-width: 720px;
  }

  .register-error {
    margin: 10px auto;
    padding: 10px;
    font-size: 15px;
    background-color: #fff;
    border: 1px solid #d8dee2;
    background-color: #ffe3e6;
    border-color: #9e1c2333;
  }

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


  .register-from > label {
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
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
    background-color: #2188ff;
    border-color: #1b1f2326;
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

  .other {
    margin: 20px auto;
    width: 70%;
    font-size: 15px;
    min-width: 720px;
    text-align: left;
  }
</style>

