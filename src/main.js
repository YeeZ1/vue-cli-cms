import Vue from 'vue'
import App from './App.vue'
//引入路由模块，在vue上注册路由功能
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
//配置全局请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true
//使用过滤器格式化时间
import moment from 'moment'
Vue.filter('dateFormat',(dataStr,param = 'YYYY-MM-DD HH:MM:SS') => {
  return moment(dataStr).format(param)
})
//一次引入mint-ui所有组件，在vue上注册mint-ui，并引入mint-ui的css样式
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
// import 'mint-ui/lib/style.css'
//下面的方法是按需引入组件，在vue上挂载所需要的组件，就可以使用第三方的组件
import {Header,Swipe, SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
