import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// import 'mint-ui/lib/style.css'
import './assets/lib/mui/dist/css/mui.min.css'
import './assets/lib/mui/dist/css/icons-extra.css'
Vue.config.productionTip = false
import router from './router'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
