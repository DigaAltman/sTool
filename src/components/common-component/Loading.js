import Vue from 'vue';
import LoadingTemplate from './Loading.vue';
const LoadingConstructor = Vue.extend(LoadingTemplate);

// 初始化组件
const LoadingInstance = new LoadingConstructor();
LoadingInstance.vm = LoadingInstance.$mount();

function showLoading(vueComponent) {
  vueComponent.$store.dispatch('showLoading');
	document.body.appendChild(LoadingInstance.vm.$el);
}

function hideLoading(vueComponent) {
  vueComponent.$store.dispatch('hideLoading');
  // 显示App.vue
	let loadingElement = document.getElementById('loading');
	loadingElement && document.body.removeChild(loadingElement);
}

// 我们可以在外面直接调用 this.$showLoading() 或者 this.$hideLoading() 来控制组件
Vue.prototype.$showLoading = showLoading;
Vue.prototype.$hideLoading = hideLoading;

export default {

}
