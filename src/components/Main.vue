<template>
  <div class='main'>

    <template v-if="show">
      <database-group-dock/>

      <div class='table-container'>
      </div>

      <database-dock/>
    </template>

    <!-- 加载动画 -->
    <loading v-if="!show" :load="load" :message="message"/>
  </div>
</template>

<script>
  import DatabaseDock from './database-component/DatabaseDock';
  import DatabaseGroupDock from './database-component/DatabaseGroupDock';
  import httpRequestService from '../service/HttpRequestService';
  import Loading from '../components/common-component/Loading';
  import LoadService from "../service/LoadService";

  export default {
    name: 'Main',
    components: {
      DatabaseGroupDock,
      DatabaseDock,
      Loading
    },
    data() {
      return {
        load: {
          loading: false,
          success: false,
          server: false,
          error: false
        },
        message: '',
        show: false
      }
    },
    created() {
      let _that = this;

      // 判断当前用户是否登录, 如果用户已经登录. 则直接进入此页面. 否则跳转到登录页面
      httpRequestService.get({
        url: '/api/user/message',
        loading: function () {
          LoadService.changeLoading(_that.load);
        },
        success: function (response) {
          LoadService.changeSuccess(_that.load);
          _that.show = true;
        },
        error: function () {
          LoadService.changeError(_that.load);
        },
        server: function (response) {
          LoadService.changeServer(_that.load);
          _that.message = response.message;
        },
        final: function () {
          LoadService.changeFinal(_that.load);
          _that.show = true;
        }
      }).then(response => {
        if (response.data.status !== 200) {
          this.$router.replace('/login');
        }
      });
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
