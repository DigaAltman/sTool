<template>
  <div class="table-list">
    <div class="table" @mouseover="changeZoomIndex(index)" @mouseout="changeZoomIndex(-999)" v-for="(item,index) in compileTableList" :index="index"
         :style="{opacity: item ? 1 : 0}">
      <div class="img" ><img src="../../assets/table.png"/></div>
      <div class="title" >{{item ? item : '补充数据使用'}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TableList",
    data() {
      return {
        zoomIndex: -999,
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
      }
    },
    computed: {
      compileTableList() {
        let v = this.tableList.length % 4;
        if (v === 0) {
          return this.tableList;
        }

        return [...this.tableList, ...Array.from({length:4 - v})]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-list {
    position: relative;
    width: 690px;
    height: 400px;
    background-color: #fff;
    margin: 100px auto;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    .table {
      margin: 5px 10px;
      display: inline-block;
      white-space: normal;
      width: 150px;
      height: 120px;
      cursor: pointer;

      .img {
        margin: 0 auto;
        width: 80px;
        height: 80px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        height: 25px;
        line-height: 25px;
        font-weight: 400;
        font-size: 14px;
      }

    }
  }
</style>
