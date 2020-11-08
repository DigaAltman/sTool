<template>
  <div class="header">
    <div class="header-body">
      <div class="left">
        <div class="icon">STool</div>
        <div class="search-item">
          <input :style="{border: focusStatus ? '2px solid #b70000' : '2px solid #828284'}" type="text"
                 @focus="changeColor(true)"
                 @blur="changeColor(false)"
                 v-model="searchValue"
                 spellcheck="false"
                 placeholder="/databaseGroup:{value} /database:{value} /table:{value}"/>

          <div :style="{backgroundColor: focusStatus ? '#b70000' : '#828284', border: focusStatus ? '2px solid #b70000' : '2px solid #828284'}">
            search
          </div>
        </div>
      </div>

      <div class="right">
        <div class="home">
          <a href="/home">首页</a>
        </div>
        <div class="settings">
          <a href="/settings">设置</a>
        </div>
        <div class="face">
          <a href="/user" title="迪迦奥特曼">
            <img src="../../assets/user2.png"/>
          </a>
        </div>
      </div>
    </div>

    <!-- 提示部分 -->
    <div class="header-tips">
      <div class="left">
        <div class="icon"></div>
        <div class="search-item" v-if="searchValue.length > 0">

          <div class="search-block" v-if="searchValue.length > 0">
            <div class="search-title">解析搜索表达式</div>
            <div class="search-body">{{searchValue}}</div>
          </div>

          <div class="search-block" v-if="databaseGroupList.length > 0">
            <div class="search-title">查询数据库组</div>
            <div class="search-body" v-for="(item,index) in databaseGroupList" :index="index">
              <div v-if="!item.includes('*')"><a :href="'database/detail/' + item"></a></div>
              <div v-else>{{item}}</div>
            </div>
          </div>

          <div class="search-block" v-if="databaseList.length > 0">
            <div class="search-title">查询数据库</div>
            <div class="search-body" v-for="(item,index) in databaseList" :index="index">
              <div v-if="!item.includes('*')"><a :href="'database/detail/' + item"></a></div>
              <div v-else>{{item}}</div>
            </div>
          </div>

          <div class="search-block" v-if="tableList.length > 0">
            <div class="search-title">查询表</div>
            <div class="search-body" v-for="(item,index) in tableList" :index="index">
              <div v-if="!item.includes('*')"><a :href="'database/detail/' + item"></a></div>
              <div v-else>{{item}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="right"></div>
    </div>
  </div>

</template>


<script>
  import {mapState} from 'vuex';

  /**
   * 将搜索值变为数组
   *
   * @param searchValue
   * @return {string[]|*[]}
   */
  function searchToList(searchValue) {
    // 判断当前搜索内容中是否包含 '/' 符号, 如果包含, 则截取到第一次出现 '/' 的位置
    let index = searchValue.indexOf('/');

    if (index >= 0) {
      searchValue = searchValue.substr(0, index);
    }

    // 如果输入值中包含 | 表示它搜索多个值
    if (searchValue.includes('|')) {
      return searchValue.split('|').map(item => item.trim()).filter(item => item !== '');
    }

    return [searchValue];
  }

  export default {
    name: "Header.vue",
    data() {
      return {
        focusStatus: false,
        searchValue: '',

        // 搜索数据表
        tableList: [],

        // 搜索数据库
        databaseList: [],

        // 搜索数据库组
        databaseGroupList: []
      }
    },
    methods: {
      changeColor(status) {
        this.focusStatus = status;
      }
    },
    computed: {
      ...mapState(['user']),
    },
    watch: {
      searchValue(val, newValue) {
        let databaseGroupRegExp = new RegExp('.*/databaseGroup:(.+)?/{0,1}', 'i');
        let databaseRegExp = new RegExp('.*/database:(.+)?/{0,1}', 'i');
        let tableRegExp = new RegExp('.*/table:(.+)?/{0,1}', 'i');

        let databaseGroupList = databaseGroupRegExp.exec(newValue);
        let databaseList = databaseRegExp.exec(newValue);
        let tableList = tableRegExp.exec(newValue);

        if (databaseGroupList && databaseGroupList.length > 0) {
          let databaseGroupSearchBody = databaseGroupList[1];
          console.log("databaseGroupSearchBody", databaseGroupSearchBody);
          this.databaseGroupList = searchToList(databaseGroupSearchBody)
        }
        if (databaseList && databaseList.length > 0) {
          let databaseSearchBody = databaseList[1];
          console.log("databaseSearchBody", databaseSearchBody);
          this.databaseList = searchToList(databaseSearchBody);
        }
        if (tableList && tableList.length > 0) {
          let tableSearchBody = tableList[1];
          console.log("tableSearchBody", tableSearchBody);
          this.tableList = searchToList(tableSearchBody);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    width: 100%;
    height: 60px;


    .header-body {
      justify-content: space-between;
      padding: 10px 20px;
      display: flex;
      align-items: center;


      .left {
        display: flex;
        align-items: center;
        min-width: 600px;
        width: 50%;

        .icon {
          width: 80px;
          margin-left: 20px;
          font-size: 30px;
          height: 30px;
          line-height: 30px;
          font-weight: bold;
          color: #b70000;
        }

        .search-item {
          flex: 1;
          display: flex;
          align-items: center;
          margin-left: 20px;

          input {
            transition: border 0.3s;
            flex: 1;
            font-size: 14px;
            font-weight: 500;
            border-right: none;
            border-radius: 10px 0 0 10px;
            height: 35px;
            box-sizing: border-box;
            outline: none;
            line-height: 25px;
            padding: 5px 13px;
            display: inline-block;
          }

          div {
            transition: border 0.4s, background-color 0.4s;
            box-sizing: border-box;
            cursor: pointer;
            display: inline-block;
            padding: 0 10px;
            border-radius: 0 10px 10px 0;
            height: 35px;
            line-height: 30px;
            color: #fff;
            font-size: 22px;
            font-weight: 500;
          }
        }
      }

      .right {
        width: 200px;
        margin-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
          width: 50px;
          height: 35px;
          font-weight: bold;
          line-height: 35px;
          margin-right: 20px;
          cursor: pointer;

          a {
            text-decoration: none;
            font-size: 14px;
            color: #5a5a5a;

            img {
              position: relative;
              height: 40px;
              bottom: 5px;
            }
          }

          a:hover {
            color: #b70000;
          }
        }

      }
    }

    .header-tips {
      position: fixed;
      justify-content: space-between;
      padding: 10px 20px;
      display: flex;
      align-items: center;

      .left {
        display: flex;
        align-items: center;
        min-width: 600px;
        width: 50%;

        .icon {
          width: 80px;
          margin-left: 20px;
          font-size: 30px;
          height: 30px;
          line-height: 30px;
          font-weight: bold;
          color: #b70000;
        }

        .search-item {
          flex: 1;
          text-align: left;
          border: 1px solid #323232;
          margin-left: 20px;
          padding: 10px 10px;
          font-size: 13px;
          font-weight: 500;
          height: auto;
          min-height: 200px;

          .search-block {
            .search-title {
              width: 100px;
              height: 18px;
              line-height: 18px;
              margin-top: 10px;
              padding: 3px 10px;
              border: 1px solid #6f5d51;
              background-color: #6f6d6d;
              border-radius: 0 15px 0 0;
              font-weight: bolder;
              color: #fff;
            }

            .search-body {
              width: 100%;
              padding: 5px 10px;
              min-height: 80px;
              border: 1px solid #6f5d51;
            }
          }
        }
      }

      .right {
        width: 200px;
        margin-right: 20px;
      }
    }
  }
</style>
