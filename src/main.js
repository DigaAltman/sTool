import Vue from 'vue';
import App from './App';
import router from './router';
import store  from './store';

// 引入 highlight.js

import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

// /**
//  * 加载自定义的 Loading 组件, 我们可以通过 this.$showLoading 来显示加载动画, 通过 this.$hideLoading 来隐藏加载动画
//  */
// import '@/components/common-component/Loading.js';

Vue.config.productionTip = false;
Vue.use(VueHighlightJS);

// 返回到上次的URL, 如果没有直接返回首页
Vue.prototype.back = function () {
  if (window.history.length > 1) {
    this.$router.back();
  } else {
    this.$router.push('/');
  }
};

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});
