<template>
  <div class="loading">
    <div class="loading-body" :style="{backgroundColor: load.success ? '#00691b' : load.error ? '#d80c0c' : load.server ? '#f18100' : '#323232'}">
      <template v-if="load.loading">
        <div class="loading-animation">
          <div v-for="(item,index) in Array.from({length: maxLength}, () => {})"
               :class="{point:true, select:index === selectIndex, transform: index === (selectIndex + 1)}"></div>
        </div>
        <div :style="{fontSize: '14px', fontWeight: 600}">
          加载中{{ '.'.repeat( (selectIndex + 2)/2) }}
        </div>
      </template>

      <template v-if="load.success">
        <div class="loading-text">SUCCESS</div>
        <div class="error-message">请求成功!!</div>
      </template>

      <template v-if="load.error">
        <div class="loading-text">ERROR</div>
        <div class="error-message">无法访问服务器!!</div>
      </template>

      <template v-if="load.server">
        <div class="loading-text">SERVER</div>
        <div class="error-message">{{message}}</div>
      </template>
    </div>
  </div>
</template>

<script>
  // 加载组件
  export default {
    name: "Loading",

    props: {
      load: {
        type: Object
      },
      message: {
        type: String
      }
    },
    data() {
      return {
        selectIndex: 0,
        maxLength: 5
      }
    },
    mounted() {
      let _that = this;
      setInterval(function () {
        _that.selectIndex = ++_that.selectIndex % _that.maxLength;
      }, 300);
    }

  }
</script>

<style lang="scss" scoped>
  .loading {
    font-family: "DejaVu Sans Mono";
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .loading-body {
      width: 150px;
      height: 60px;
      margin: 0 auto;
      padding: 5px 0;
      color: #fff;
      display: flex;
      transition: background-color 0.5s;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      .loading-animation {
        width: 80px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .point {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #bbb;
        }

        .select {
          width: 12px;
          height: 12px;
          background-color: #fff;
        }

        .transform {
          width: 10px;
          height: 10px;
          background-color: #EEE1D0;
        }
      }

      .loading-text {
        font-size: 25px;
        font-weight: bolder;
      }

      .error-message {
        font-size: 12px;
        font-weight: bold;
      }
    }
  }


  /*#loading-animal {*/
  /*  margin-top: 10px;*/
  /*  height: 30px;*/
  /*  width: 30px;*/
  /*  border: 3px solid #fff;*/
  /*  border-bottom-color: #323232;*/
  /*  -webkit-animation: loadingRotate 0.75s linear infinite;*/
  /*  animation: loadingRotate 0.75s linear infinite;*/
  /*}*/

  /*#loading-text {*/
  /*  font-size: 25px;*/
  /*  font-weight: bolder;*/
  /*}*/

  /*@-webkit-keyframes loadingRotate {*/
  /*  0% {*/
  /*    -webkit-transform: rotate(0deg);*/
  /*  }*/
  /*  50% {*/
  /*    -webkit-transform: rotate(180deg);*/
  /*  }*/
  /*  100% {*/
  /*    -webkit-transform: rotate(360deg);*/
  /*  }*/
  /*}*/

  /*@keyframes loadingRotate {*/
  /*  0% {*/
  /*    transform: rotate(0deg);*/
  /*  }*/
  /*  50% {*/
  /*    transform: rotate(180deg);*/
  /*  }*/
  /*  100% {*/
  /*    transform: rotate(360deg);*/
  /*  }*/
  /*}*/
</style>
