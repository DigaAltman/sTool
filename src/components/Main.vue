<template>
  <div class='main'>
      <database-group-dock/>
      <div class='table-container'></div>
      <database-dock/>
  </div>
</template>

<script>
  import DatabaseDock from './database-component/DatabaseDock';
  import DatabaseGroupDock from './database-component/DatabaseGroupDock';
  import httpRequestService from '../service/HttpRequestService';
  import {ERROR, WARN} from '../common/DialogCommon.js';
  import {mapState} from "vuex";

  export default {
    name: 'Main',
    components: {
      DatabaseGroupDock,
      DatabaseDock
    },
    computed: {

    },
    data() {
      return {

      }
    },
    created() {
      const _that = this;
      _that.$store.dispatch('showLoading');

      // httpRequestService.get({
      //   url: '/api/user/message',
      //   loading: function() {
      //     _that.$store.dispatch('showLoading');
      //   },
      //   success: function() {
      //     // 查询当前用户对应的数据库组
      //     _that.$store.dispatch('hideLoading');
      //   },
      //   server: function(response) {
      //     _that.$store.dispatch('hideLoading');
      //     if(response.status === 502) {
      //       _that.$router.push('/login');
      //     } else {
      //       WARN.message = response.message;
      //       _that.$store.dispatch('showDialog', ERROR);
      //     }
      //   },
      //   error: function() {
      //     _that.$store.dispatch('hideLoading');
      //
      //     ERROR.message = '无法请求服务器, 请检查您的网络连接';
      //     _that.$store.dispatch('showDialog', ERROR);
      //   }
      // });
    }
  }
</script>

<style scoped>
  .main {
    position: relative;
    width: 100%;
    margin: 0 auto;
    min-width: 900px;
  }

  .table-container {
    position: relative;
    margin: 50px auto;
    width: 85%;
    height: 450px;
    border: 1px solid #323232;
  }

</style>
