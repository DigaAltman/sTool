import Vue from 'vue';
import App from './App';
import router from './router';
import store  from './store';

// /**
//  * 加载自定义的 Loading 组件, 我们可以通过 this.$showLoading 来显示加载动画, 通过 this.$hideLoading 来隐藏加载动画
//  */
// import '@/components/common-component/Loading.js';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});
