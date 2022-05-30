import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.min.js';

import VueRouter from 'https://unpkg.com/vue-router@3.1.3/dist/vue-router.esm.browser.min.js';
Vue.use(VueRouter);
let routes = [];
const router = new VueRouter({
  mode: 'history',
  routes,
});

import Vuex from 'https://unpkg.com/vuex@3.1.1/dist/vuex.esm.browser.min.js';
Vue.use(Vuex);
const store = new Vuex.Store({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});

import App from './App.mjs';
window.vm = new Vue({
  store,
  router,
  render: (h) => h(App),
  mixins: [],
  data() {
    return {};
  },
}).$mount('#app');
