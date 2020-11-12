<template>
  <div class="forget">
    <div class="forget-icon">
      <img src="../assets/stool.png"/>
    </div>
    <div class="form">
      <div class="forget-title">Reset your password</div>

      <div class="forget-error">
        用户名称不能为空
        <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
          <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
        </button>
      </div>

      <div class="form-reset">
        
        <label for="username">输入您的用户帐户的已验证电子邮件地址，我们将向您发送密码重置链接.</label>
        <input type="text" id="username" class="form-control input-block" tabindex="1" autocomplete="username" autofocus="autofocus" spellcheck="false" placeholder="输入您的电子邮箱地址" />
      
        <input type="submit" name="commit" value="发送重置密码的电子邮件" tabindex="3" class="btn btn-primary btn-block" data-disable-with="Signing in…">

      </div>
    </div>
  </div>
</template>

<script>
  import http from '@/http';

  /**
   * 加载动画组件
   */ 
  export default {
    name: 'Forget',
    data() {
      return {
        
      }
    },
    created() {
      
    }
  }
</script>

<style scoped>
  .forget {
    position: absolute;
    width: 100%;
    min-width: 800px;
    height: 100%;
    margin: 0 auto;
    background-color: #f9f9f9;
  }

  .forget-icon {
    padding-top: 20px;
    width: 100px;
    height: 90px;
    margin: 20px auto;
  }

  .forget-icon img {
    width: 100%;
    height: 100%;
  }

  .form {
    width: 340px;
    margin: 10px auto;
  }

  .forget-title {
    font-size: 26px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    letter-spacing: -.5px;
    font-weight: 400;
  } 

  .forget-error {
    margin-top: 10px;
    padding: 5px 10px;
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

  .form-reset {
    margin-top: 10px;
    padding: 20px;
    font-size: 15px;
    background-color: #fff;
    border: 1px solid #d8dee2;
  }

  .form-reset > label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
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
    border-color: #1b1f2326;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: bolder;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #fff;
    outline: none;
  }
</style>

