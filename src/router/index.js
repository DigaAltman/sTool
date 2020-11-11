import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Header from '@/components/user-module/Header';
import Loading from '@/components/common-component/Loading';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/head',
      name: 'Header',
      component: Header
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    }
  ]
})
