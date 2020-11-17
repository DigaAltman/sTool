<template>
  <div class="table-list">
    <div class="table" @mouseover="changeZoomIndex(index)" @mouseout="changeZoomIndex(-999)"
         v-for="(item,index) in compileTableList" :index="index" :style="{opacity: item ? 1 : 0}">
      <div class="img" :style="compileTableImgStyle(index)"><img src="../../assets/table.png"/></div>
      <div class="title" :style="compileTitleStyle(index)">
        {{item ? item : '补充数据使用'}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TableList",
    data() {
      return {
        zoomIndex: 0,

        tableList: [
          'bis_name',
          'budget',
          'budget_copy1',
          'budget_supervise',
          'pay',
          'pay_copy1',
          'rd_add_budget_hz',
          'rd_add_pay_detail',
          'rd_nz_budget_hz',
          'rd_nz_pay_detail',
          'vw_rd_nz_budget_hz'
        ]
      }
    },
    methods: {
      changeZoomIndex(index) {
        this.zoomIndex = index;
      },
      compileTableImgStyle(index) {
        let {zoomIndex} = this;

        // 当前选中行
        let level = zoomIndex >= 0 ? zoomIndex / 4 : -999;

        // 同一层
        if (index / 4 === level) {
          // 同一个
          if (index === zoomIndex) {
            return {
              width: '100px',
              height: '95px',
              marginTop: '0px auto'
            }
          }

          return {
            width: '70px',
            height: '70px',
            marginTop: '15px auto'
          }

        }

        return {
          width: '80px',
          height: '80px',
          marginTop: '10px auto'
        }
      },
      compileTitleStyle(index) {
        let {zoomIndex} = this;

        // 当前选中行
        let level = zoomIndex / 4;

        // 同一层
        if (index / 4 === level) {
          // 同一个
          if (index === zoomIndex) {
            return {
              fontSize: '16px',
              fontWeight: '500'
            }
          }

          return {
            fontSize: '13px',
            fontWeight: '400'
          }

        }

        return {
          fontSize: '14px',
          fontWeight: '400'
        }
      }
    },
    computed: {
      compileTableList() {
        let v = this.tableList.length % 4;
        if (v === 0) {
          return this.tableList;
        }

        return [...this.tableList, ...Array.from({length: 4 - v})]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-list {
    position: relative;
    width: 690px;
    height: 450px;
    background-color: #fff;
    margin: 100px auto;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    .table {
      margin: 10px 10px;
      white-space: normal;
      border: 1px solid #fff;
      width: 150px;
      height: 130px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      .img {
        transition: width 0.2s, height 0.2s, margin-top 0.2s;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        transition: font-size 0.2s, font-weight 0.2s;

        height: 25px;
        line-height: 25px;
        font-weight: 400;
        font-size: 14px;
      }

    }
  }
</style>
