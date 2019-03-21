import Vue from 'vue'
import app from './app'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './store/index'
import Star from './components/Star/Star.vue'
import { Button } from 'mint-ui';
import { Field } from 'mint-ui';


// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Header.name, Header);
Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
})
