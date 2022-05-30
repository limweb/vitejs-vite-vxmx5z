import Vue from '/js/vue.esm.browser.min.js';
import VueRouter from '/js/vue-router.esm.browser.min.js';
import Vuex from '/js/vuex.esm.browser.min.js';

Vue.use(VueRouter);
import routes from "./routes/route.js";
const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(Vuex);
import user from "./stores/user.js";
const store = new Vuex.Store({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    user
  }
});
import App from './App.js';
window.vm = new Vue({
  store,
  router,
  render: (h) => h(App),
  mixins: [],
  data() {
    return {};
  },
}).$mount('#app');