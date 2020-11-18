<template>
  <div class="tab-list">
    <div class="table-list"
         @click="hideRightMenu"
         @mouseout="changeZoomIndex(-999)">
      <div class="table"
           @contextmenu.prevent.stop="rightClick(index,$event)"
           @mouseover="changeZoomIndex(index)"
           v-for="(item,index) in compileTableList" :index="index"
           :style="{opacity: item ? 1 : 0, cursor: item ? 'pointer' : 'normal', backgroundColor: index === selectIndex ? '#dfe3bb' : '#fff'}">
        <div class="img" :style="compileTableImgStyle(index)"><img src="../../assets/table.png"/></div>
        <div class="title" :style="compileTitleStyle(index)">
          {{item ? item : '补充数据使用'}}
        </div>
      </div>
    </div>

    <div class="menu" v-if="showRightMenu" :style="{top: `${pageY}px`, left: `${pageX}px`, width: 0 <= menuZoomIndex < this.rightMenuList.length ? '200px' : '180px'}" >
      <div class="menu-item" @mouseover="changeMenuZoomIndex(index)" @mouseout="changeMenuZoomIndex(-999)" v-for="(item,index) in rightMenuList"
           :class="{menuSelect: index === menuZoomIndex}">
        <div class="menu-item-img" :class="{menuSelectImg: index === menuZoomIndex}"><img :src="item.img"/></div>
        <div class="menu-item-title" @click="item.click" :class="{menuSelectTitle: index === menuZoomIndex}">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TableList",
    data() {
      return {
        rightMenuList: [
          {
            img: require('../../assets/code.png'),
            title: 'Generate Entity',
            click() {
              console.log('Generate Entity')
            }
          },
          {
            img: require('../../assets/code.png'),
            title: 'Generate Mapper',
            click() {
              console.log('Generate Mapper')
            }
          },
          {
            img: require('../../assets/edit-tab.png'),
            title: 'Edit Structure',
            click() {
              console.log('Edit Structure')
            }
          },
          {
            img: require('../../assets/edit-tab.png'),
            title: 'Read Detail',
            click() {
              console.log('Read Detail')
            }
          },
          {
            img: require('../../assets/delete-table.png'),
            title: 'Delete Table',
            click() {
              console.log('Delete Table')
            }
          },
          {
            img: require('../../assets/save-file.png'),
            title: 'Backup Table',
            click() {
              console.log('Backup Table')
            }
          },
          {
            // 附带图片
            img: require('../../assets/trash-empty.png'),
            // 显示标题
            title: 'Truncate Table',
            // 点击事件
            click() {
              console.log('Truncate Table');
            }
          }
        ],
        zoomIndex: -999,
        selectIndex: -999,
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
        ],
        pageX: 0,
        pageY: 0,
        showRightMenu: false,

        // 当前移动到的的菜单子项索引
        menuZoomIndex: 0,
      }
    },
    methods: {
      changeMenuZoomIndex(index) {
        this.menuZoomIndex = index;
      },

      hideRightMenu() {
        this.showRightMenu = false;
      },
      changeZoomIndex(index) {
        if (index < this.tableList.length) {
          this.zoomIndex = index;
        }
      },

      commonStyle(index, base, select, other) {
        let {zoomIndex, selectIndex} = this;

        if (index === selectIndex || index === zoomIndex) {
          return select;
        }

        if (zoomIndex === -999) {
          return base;
        }

        return other;
      },

      compileTableImgStyle(index) {
        return this.commonStyle(index, {
          width: '80px',
          height: '80px',
          marginTop: '10px auto'
        }, {
          width: '100px',
          height: '95px',
          marginTop: '0px auto',
        }, {
          width: '70px',
          height: '70px',
          marginTop: '15px auto'
        });
      },
      compileTitleStyle(index) {
        return this.commonStyle(index, {
          fontSize: '14px',
          fontWeight: '400'
        }, {
          fontSize: '16px',
          fontWeight: '500'
        }, {
          fontSize: '13px',
          fontWeight: '400'
        });
      },
      rightClick(index, $event) {
        let {pageX, pageY} = $event;

        this.pageX = pageX;
        this.pageY = pageY;
        this.selectIndex = index;
        this.showRightMenu = true;
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
      position: fixed;
      transition: width 0.2s;
      height: 320px;
      border-radius: 5px;
      border: 1px solid #ccc;
      background-color: #fff;

      .menu-item {
        cursor: pointer;
        margin: 5px auto;
        padding: 5px 10px;
        display: flex;

        .menu-item-img {
          transition: width 0.2s, height 0.2s;
          width: 30px;
          height: 30px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .menu-item-title {
          transition: font-size 0.25s, line-height 0.25s, height 0.25s;
          margin-top: 2.5px;
          height: 25px;
          font-size: 14px;
          line-height: 25px;
          margin-left: 10px;
        }
      }

      .menuSelect {

        .menuSelectImg {
          width: 35px;
          height: 35px;
        }

        .menuSelectTitle {
          font-size: 16px;
          line-height: 30px;
          height: 30px;
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
