<template>
  <div class="loading">
    <div class="loading-body">
      <div v-for="(item, index) in Array.from({length: maxLength})"
           :index="index"
           :style="{backgroundColor: selectIndex === index ? bgColor[index]['select'] : bgColor[index]['noSelect']}"
           :class="{block: true, zoom: selectIndex === index, left: index === 0, top: index === 1, right: index === 2}">
      </div>
    </div>
  </div>
</template>

<script>
  // 加载组件
  export default {
    name: "Loading",
    data() {
      return {
        selectIndex: 1,
        maxLength: 3,
        bgColor: [
          {
            noSelect: '#259403',
            select: '#49ff00'
          },
          {
            noSelect: '#ada903',
            select: '#f3c000'
          },
          {
            noSelect: '#b70000',
            select: '#f30000'
          }
        ]
      }
    },
    mounted() {
      let _that = this;
      setInterval(function () {
        _that.selectIndex = ++_that.selectIndex % _that.maxLength;
      }, 500);
    }
  }
</script>

<style lang="scss" scoped>
  .loading {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .loading-body {
      width: 200px;
      height: 100px;
      margin: 0 auto;
      background-color: #323232;
      padding: 5px 0;
      transition: background-color 0.5s;

      .block {
        display: inline-block;
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transition: width 0.5s, height 0.5s, border-radius 0.5s, background-color 0.5s;
      }

      .top {
        top: -10px;
        left: 0px;

        /*animation:b 2s;*/
        /*animation-iteration-count:1;*/

        /*-webkit-animation:b 2s;*/
        /*-webkit-animation-iteration-count:1;*/
      }

      .left {
        top: 70px;
        left: -30px;

        /*animation:a 2s;*/
        /*animation-iteration-count:1;*/

        /*-webkit-animation:a 2s;*/
        /*-webkit-animation-iteration-count:1;*/
      }

      .right {
        top: 70px;
        left: 30px;

        animation:c 2s;
        animation-iteration-count:1;

        -webkit-animation:c 2s;
        -webkit-animation-iteration-count:1;
      }

      .zoom {
        /*width: 25px;*/
        /*height: 25px;*/
        border-radius: 12px;
      }
    }
  }

  @keyframes a
  {
    0%   {
      left: -30px;
      top: 70px;
    }
    33.3%  {
      left: 0px;
      top: -10px;
    }
    66.6%  {
      left: 30px;
      top: 70px;
    }
    100%  {
      left: -30px;
      top: 70px;
    }
  }

  @keyframes b
  {
    0%   {
      left: 0px;
      top: -10px;
    }
    33.3%  {
      left: 30px;
      top: 70px;
    }
    66.6%  {
      left: -30px;
      top: 70px;
    }
    100%  {
      left: 0px;
      top: -10px;
    }
  }


  @keyframes c
  {
    0%   {
      left: 30px;
      top: -70px;
    }
    33.3%  {
      left: 0px;
      top: -10px;
    }
    66.6%  {
      left: -30px;
      top: 70px;
    }
    100%  {
      left: 30px;
      top: -70px;
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
