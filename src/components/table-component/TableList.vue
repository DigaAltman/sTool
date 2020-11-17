<template>
  <div class="tab-list">
    <div class="table-list" v-show="false" @mouseout="changeZoomIndex(-999)">
      <div class="table"
           @contextmenu.prevent.stop="rightClick(index,$event)"
           @mouseover="changeZoomIndex(index)"
           v-for="(item,index) in compileTableList" :index="index"
           :style="{opacity: item ? 1 : 0, cursor: item ? 'pointer' : 'normal'}">
        <div class="img" :style="compileTableImgStyle(index)"><img src="../../assets/table.png"/></div>
        <div class="title" :style="compileTitleStyle(index)">
          {{item ? item : '补充数据使用'}}
        </div>
      </div>
    </div>

    <div class="menu">
      <div class="menu-item">
        <div class="menu-item-img"><img src="../../assets/code.png"/></div>
        <div class="menu-item-title">Generate Entity</div>
      </div>
      <div class="menu-item">
        <div class="menu-item-img"><img src="../../assets/code.png"/></div>
        <div class="menu-item-title">Generate Mapper</div>
      </div>
      <div class="menu-item">
        <div class="menu-item-img"><img src="../../assets/edit-tab.png"/></div>
        <div class="menu-item-title">Edit Table Structure</div>
      </div>
      <div class="menu-item">
        <div class="menu-item-img"><img src="../../assets/edit-tab.png"/></div>
        <div class="menu-item-title">Read Table Detail</div>
      </div>
      <div class="menu-item">
        <div class="menu-item-img"><img src="../../assets/delete-table.png"/></div>
        <div class="menu-item-title">Delete Table</div>
      </div>
      <div class="menu-item">
        <div class="menu-item-img"><img src="../../assets/save-file.png"/></div>
        <div class="menu-item-title">Backup Table</div>
      </div>
      <div class="menu-item">
        <div class="menu-item-img"><img src="../../assets/trash-empty.png"/></div>
        <div class="menu-item-title">Backup Table</div>
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
        if (index < this.tableList.length) {
          this.zoomIndex = index;
        }
      },
      compileTableImgStyle(index) {
        let {zoomIndex} = this;

        if (zoomIndex === -999) {
          return {
            width: '80px',
            height: '80px',
            marginTop: '10px auto'
          }
        }

        // 同一个
        if (index === zoomIndex) {
          return {
            width: '100px',
            height: '95px',
            marginTop: '0px auto'
          };
        }

        return {
          width: '70px',
          height: '70px',
          marginTop: '15px auto'
        }

      },
      compileTitleStyle(index) {
        let {zoomIndex} = this;

        if (zoomIndex === -999) {
          return {
            fontSize: '14px',
            fontWeight: '400'
          }
        }

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

      },
      rightClick(index, $event) {
        console.log(index);
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
  .tab-list {
    position: relative;
    min-width: 800px;
    height: 500px;
    margin: 10px auto;

    .menu {
      left: 10px;
      top: 10px;
      position: fixed;
      width: 200px;
      height: 300px;
      background-color: #fff;

      .menu-item {
        padding: 5px 10px;
        display: flex;

        .menu-item-img {
          width: 30px;
          height: 30px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .menu-item-title {
          height: 30px;
          line-height: 30px;
          margin-left: 10px;
        }
      }
    }
  }

  .table-list {
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
