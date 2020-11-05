<template>
  <div class="database-group-list" :style="{marginTop: `${marginTopLength}px`}">
    <div v-for="(element,index) in list" class="simple-database-group" :index="index" @mouseover="setZoomIndex(index)"
         @click="setSelectIndex(index)" @mouseout="setZoomIndex(-999)">
      <div class="icon" :style="compileStyle(index)">
        <img src="../../assets/database-group.png"/>
      </div>

      <div class="title" v-if="index == zoomIndex">
        <div>{{element.databaseGroupName}}</div>
      </div>
    </div>
  </div>
</template>


<script>

  /**
   * 加载动画组件
   */
  export default {
    name: 'DatabaseGroupDock',
    data() {
      return {
        zoomIndex: -999,
        selectIndex: -999,
        list: [
          {
            databaseGroupId: 'a7024d9a-cb99-4576-b673-9083df198246',
            databaseGroupName: 'mysql',
            userId: '4a5e8017-a520-4632-87e0-e0666efe3237',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseGroupId: '36326095-b8c0-4e7b-82d2-98a44503be18',
            databaseGroupName: 'oracle',
            userId: '4a5e8017-a520-4632-87e0-e0666efe3237',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseGroupId: '2b2c3d5c-af23-4c68-9a6a-5c970a004ad5',
            databaseGroupName: 'sybase',
            userId: '4a5e8017-a520-4632-87e0-e0666efe3237',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseGroupId: 'fdd8c19d-fb72-4c05-b2c7-69609bfbcd8e',
            databaseGroupName: 'db2',
            userId: '4a5e8017-a520-4632-87e0-e0666efe3237',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseGroupId: 'a7024d9a-cb99-4576-b673-9083df198246',
            databaseGroupName: 'mysql',
            userId: '4a5e8017-a520-4632-87e0-e0666efe3237',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseGroupId: '36326095-b8c0-4e7b-82d2-98a44503be18',
            databaseGroupName: 'oracle',
            userId: '4a5e8017-a520-4632-87e0-e0666efe3237',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseGroupId: '2b2c3d5c-af23-4c68-9a6a-5c970a004ad5',
            databaseGroupName: 'sybase',
            userId: '4a5e8017-a520-4632-87e0-e0666efe3237',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseGroupId: 'fdd8c19d-fb72-4c05-b2c7-69609bfbcd8e',
            databaseGroupName: 'db2',
            userId: '4a5e8017-a520-4632-87e0-e0666efe3237',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          }
        ]
      }
    },
    methods: {
      compileStyle(index) {
        let {zoomIndex, selectIndex} = this;

        if (index == selectIndex) {
          return {
            width: '70px',
            height: '60px',
            left: `0px`,
            transform: `rotate(360deg)`
          }
        }
        if (index == zoomIndex) {
          return {
            width: '70px',
            height: '60px',
            left: `10px`
          }
        } else if (Math.abs(index - zoomIndex) <= 2) {
          return {
            width: `${60 + Math.pow(Math.abs(index - zoomIndex), 2) * -4}px`,
            height: `${60 + Math.pow(Math.abs(index - zoomIndex), 2) * -4}px`,
            left: `${5 - Math.abs(index - zoomIndex) * 2}px`
          }
        }

        return {
          width: '40px',
          height: '40px',
          left: '0px'
        }
      },
      setZoomIndex(index) {
        this.zoomIndex = index;
      },
      setSelectIndex(index) {
        this.selectIndex = index;
      }
    },
    computed: {
      // 距离下部分边距,居中使用
      marginTopLength() {
        return this.list ? -1 * this.list.length * 35 : 0;
      }
    }
  }
</script>

<style scoped>
  .database-group-list {
    position: fixed;
    width: 40px;
    padding-left: 5px;
    background-color: #c7c7c730;
    border: 1px solid #323232;
    border-left: none;
    border-radius: 0px 8px 8px 0px;
    top: 50%;
  }

  .simple-database-group {
    width: 150px;
    min-width: 100px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .icon {
    position: relative;
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transition: width 0.2s, height 0.2s, left 0.2s, transform 0.2s;
    -webkit-transition: width 0.2s, height 0.2s, left 0.2s,  transform 0.2s;
  }

  .icon > img {
    width: 100%;
    height: 100%;
  }

  .title {
    margin-left: 5px;
    font-size: 17px;
    font-weight: 500;
    padding: 2px 10px;
    border-radius: 3px;
    border: 2px solid #80927eeb;
    background-color: #5a5a5a;
    color: #fff;
  }
</style>

