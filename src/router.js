import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import sharePic from './components/sharepic/sharePic.vue'
export default new VueRouter({
    routes:[
        {path:'/' , redirect:'/home'},
        {path:'/home' , component:home},
        {path:'/member' , component:member},
        {path:'/shopcar' , component:shopcar},
        {path:'/search' , component:search},
        {path:'/home/newsList' , component:newsList},
        {path:'/home/sharePic' , component:sharePic},
        {path:'/home/newsInfo/:id' , component:newsInfo}
    ],
    linkActiveClass:'mui-active'
})