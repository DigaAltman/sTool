<template>
<!--  :style="{left:(appWidth - 300)/2 + 'px', top: (appHeight - 150)/2 + 'px'}"-->
  <div id="loading" v-if="loadingStatus" :style="{width:appWidth+'px', height: appHeight + 'px', top: '0px'}">
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
  import {mapState} from "vuex";

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
    computed: {
      ...mapState(['appWidth', 'appHeight', 'loadingStatus'])
    },
    mounted() {
      let _that = this;
      setInterval(function () {
        _that.selectIndex = ++_that.selectIndex % _that.maxLength;
      }, 1200);
    }
  }
</script>

<style lang="scss" scoped>
  #loading {
    position: fixed;
    /*width: 300px;*/
    /*height: 150px;*/
    display: flex;
    background-color: #323232;
    opacity: 0.8;
    align-items: center;

    .loading-body {
      width: 200px;
      height: 100px;
      margin: 0 auto;
      padding: 5px 0;
      transition: background-color 0.5s;

      .block {
        display: inline-block;
        position: relative;
        width: 10px;
        marin: 0;
        height: 10px;
        border-radius: 50%;
        transition: width 0.5s, height 0.5s, border-radius 0.5s, background-color 0.5s;
      }

      .top {
        top: 0px;
        left: 0px;

        animation: b 2s infinite;
        -webkit-animation: b 2s infinite;
      }

      .left {
        top: 70px;
        left: -35px;

        animation: a 2s infinite;
        -webkit-animation: a 2s infinite;
      }

      .right {
        top: 70px;
        left: 30px;

        animation: c 2s infinite;
        -webkit-animation: c 2s infinite;
      }

      .zoom {
        width: 15px;
        height: 15px;
        border-radius: 12px;
      }
    }
  }

  @keyframes a {
    0% {
      left: -30px;
      top: 70px;
    }
    33.3% {
      left: 10px;
      top: 0px;
    }
    66.6% {
      left: 50px;
      top: 70px;
    }
    100% {
      left: -30px;
      top: 70px;
    }
  }

  @keyframes b {
    0% {
      left: 0px;
      top: 0px;
    }
    33.3% {
      left: 40px;
      top: 70px;
    }
    66.6% {
      left: -45px;
      top: 70px;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }


  @keyframes c {
    0% {
      top: 70px;
      left: 30px;
    }
    33.3% {
      left: -55px;
      top: 70px;
    }
    66.6% {
      left: -10px;
      top: 0px;
    }
    100% {
      top: 70px;
      left: 30px;
    }
  }
</style>
