<template>
  <div class="database-dock">
    <ul :style="{width: outerContainerLength + 'px'}"
        @mouseover="changeMouseStatus(true)"
        @mouseout="changeMouseStatus(false)">

      <li v-for="(item,index) in databaseList" :index="index"
          @mouseover="checkZoomIndex(index)"
          @mouseout="checkZoomIndex(-999)"
          @click="clickHandler($event, index)">

        <div class="database-item" :style="computedStyle(index)">
          <img :src="item.productType == 0 ? require('../../assets/mysql.png') : require('../../assets/database.png')"/>
          <div class="title" :style="zoomIndex == index ? {bottom: '10px', opacity: 1} : {bottom: '0px', opacity: 0}">
            {{item.productName}}
          </div>
        </div>

      </li>

    </ul>

    <div class="table-container" :style="tableContainerStyle">

    </div>

  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data() {
      return {

        clickStatus: false,
        clickIndex: -999,

        currentClickX: -999,
        currentClickY: -999,

        zoomStatus: false,
        zoomIndex: -999,
        databaseList: [
          {
            productType: 0,
            productName: "mt_ds_view"
          },
          {
            productType: 0,
            productName: "mt_gk_czdb"
          },
          {
            productType: 0,
            productName: "mt_rd_exam"
          },
          {
            productType: 0,
            productName: "mt_rd_reporting"
          },
          {
            productType: 0,
            productName: "GZCZ12019"
          },
          {
            productType: 1,
            productName: "GZCZ22020"
          },
          {
            productType: 1,
            productName: "JACZ2019"
          },
          {
            productType: 1,
            productName: "JACZ2020"
          },
          {
            productType: 1,
            productName: "JJCZ2020"
          }
        ]
      }
    },
    methods: {

      // 点击时切入动画
      clickHandler(event, index) {
        let {pageX, pageY} = event;
        this.currentClickX = pageX;
        this.currentClickY = pageY;
        this.clickIndex = index;
      },

      // 修改放大状态
      checkZoomIndex(index) {
        this.zoomIndex = index;
      },
      // 修改当前鼠标的状态
      changeMouseStatus(status) {
        this.zoomStatus = status;
      },
      // 计算元素的宽度和高度
      computedStyle(index) {
        let {zoomIndex} = this, width = 60, height = 60;
        let range = Math.abs(index - zoomIndex);
        if (index === zoomIndex) {
          return {width: '95px', height: '95px'}
        } else if (range <= 2) {
          return {
            width: `${width + 5 * Math.pow(3 - range, 2)}px`,
            height: `${height + 5 * Math.pow(3 - range, 2)}px`
          }
        } else {
          return {
            width: `${width}px`,
            height: `${height}px`
          }
        }
      }
    },
    computed: {
      outerContainerLength() {
        let {zoomIndex, databaseList, zoomStatus} = this;
        if (zoomIndex >= 0 || zoomStatus) {
          return databaseList.length * 80 + 100;
        }
        return databaseList.length * 80;
      },

      tableContainerStyle() {
        let {clickIndex, databaseList} = this;
        if (clickIndex >= 0) {
          return {
            width: databaseList.length * 80 + 'px',
            height: '500px',
            marginTop: '50px',
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .database-dock {
    position: relative;
    width: 100%;
    margin: 25px auto;
    min-width: 1000px;
    height: 100px;

    ul {
      transition: width 0.2s;
      position: relative;
      margin: 0 auto;
      height: 70px;
      top: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background-color: #c7c7c730;
      border: 1.5px solid #323232;
      border-radius: 6px;

      li {
        list-style: none;

        .database-item {
          transition: width 0.3s, height 0.3s;
          display: flex;
          flex-direction: column-reverse;
          align-items: center;

          img {
            width: 100%;
            height: 100%;
          }

          .title {
            transition: bottom 0.5s, opacity 0.5s;
            min-width: 95px;
            white-space: nowrap;
            position: relative;
            padding: 3px 5px;
            border-radius: 5px;
            border: 1px solid #2c3e50;
            height: 25px;
            font-weight: 500;
            line-height: 25px;
            color: #fff;
            font-size: 15px;
            background-color: #6f6d6d;
          }
        }
      }
    }

    .table-container {
      transition: width 0.5s, height 0.5s, margin-top 0.25s;
      position: relative;
      width: 0;
      height: 0;
      border: 1px solid #323232;
      box-sizing: border-box;
      margin: 0 auto;
    }


  }
</style>
