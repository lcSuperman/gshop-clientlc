import Vue from 'vue'
import app from './app'
import router from './router'
import Header from './components/Header/Header.vue'

// 注册全局组件
Vue.component('Header', Header)
new Vue({
  el: '#app',
  render: h => h(app),
  router,
})
