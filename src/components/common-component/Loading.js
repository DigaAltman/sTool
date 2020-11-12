import Vue from 'vue';
import Loading from './Loading.vue';

const LoadingConstrcutor = Vue.extend(Loading);
const loading = new LoadingConstrcutor();
Loading.vm = Loading.$mount();

export default {
	showLoading: function() {
		document.getElementById("app").appendChild(loading.vm.$el);
	},
	hideLoading: function() {
		document.getElementById("app").removeChild(loading.vm.$el);
	}
}