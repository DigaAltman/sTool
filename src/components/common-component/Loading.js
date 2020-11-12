// import Vue from 'vue';
// import LoadingTemplate from './Loading.vue';
// import {mapState} from "vuex";
// const LoadingConstructor = Vue.extend(LoadingTemplate);
//
// console.log(mapState(['appWidth', 'appHeight']));
// // 初始化组件
// const LoadingInstance = new LoadingConstructor({
//   computed: mapState(['appWidth', 'appHeight'])
// });
// LoadingInstance.vm = LoadingInstance.$mount();
//
// function showLoading(vueComponent) {
//   vueComponent.$store.dispatch('showLoading');
// 	document.body.appendChild(LoadingInstance.vm.$el);
// }
//
// function hideLoading(vueComponent) {
//   vueComponent.$store.dispatch('hideLoading');
//   // 显示App.vue
// 	let loadingElement = document.getElementById('loading');
// 	loadingElement && document.body.removeChild(loadingElement);
// }
//
// // 我们可以在外面直接调用 this.$showLoading() 或者 this.$hideLoading() 来控制组件
// Vue.prototype.$showLoading = showLoading;
// Vue.prototype.$hideLoading = hideLoading;
//
// export default {}
