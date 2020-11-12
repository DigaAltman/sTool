import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Login from '@/components/user-module/Login';
import Register from "@/components/user-module/Register";
import Forget from '@/components/user-module/Forget';
import Reset from "@/components/user-module/Reset";
import Dialog from "../components/common-component/Dialog";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/reset',
      name: 'reset',
      component: Reset
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    }
  ]
})
