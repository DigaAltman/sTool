<template>
  <div class="database-group-list" :style="{marginTop: `${marginTopLength}px`}">
    <div v-for="(element,index) in databaseGroupList" class="simple-database-group" :index="index" @mouseover="setZoomIndex(index)"
         @click="setSelectIndex(index)" @mouseout="setZoomIndex(-999)">
      <div class="icon" :style="compileStyle(index)">
        <img v-if="index === currentDatabaseGroupIndex"  src="../../assets/database-group-select.png"/>
        <img v-else  src="../../assets/database-group.png"/>
      </div>

      <div class="title" v-if="index === zoomIndex">
        <div>{{element.databaseGroupName}}</div>
      </div>
    </div>
  </div>
</template>


<script>

  import httpRequestService from '../../service/HttpRequestService';
  import {mapState} from 'vuex';

  /**
   * 加载动画组件
   */
  export default {
    name: 'DatabaseGroupDock',
    data() {
      return {
        zoomIndex: -999,
      }
    },
    created() {
      let _that = this;

      httpRequestService.get({
        url: '/api/database_group/list',
        success(response) {
          _that.$store.dispatch('setDatabaseGroupList', response.data);
        }
      })
    },
    methods: {
      compileStyle(index) {
        let {zoomIndex, currentDatabaseGroupIndex} = this;

        if (index === currentDatabaseGroupIndex) {
          return {
            width: '70px',
            height: '60px',
            left: `0px`,
            transform: `rotate(360deg)`
          }
        }
        if (index === zoomIndex) {
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
        let _that = this;

        _that.$store.dispatch('setCurrentDatabaseGroupIndex', index);
        let {databaseGroupList} = _that;

        // 如果数据库组程序坞的长度 大于 当前用户选择的数据库组索引
        if (databaseGroupList.length > index) {
          let databaseGroup = databaseGroupList[index];
          console.log(databaseGroup);
          httpRequestService.get({
            url: '/api/database/list/' + databaseGroup.databaseGroupId,
            success(response) {
              _that.$store.dispatch('setDatabaseList', response.data);
            }
          });
        }
      }
    },
    computed: {
      ...mapState(['databaseGroupList', 'currentDatabaseGroupIndex']),
      // 距离下部分边距,居中使用
      marginTopLength() {
        return this.databaseGroupList ? -1 * this.databaseGroupList.length * 35 : 0;
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

