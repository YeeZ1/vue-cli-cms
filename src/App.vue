<template>
  <div id="app">
    <!-- 顶部 -->
      <mt-header fixed title="vue-cli 项目"></mt-header>
      <!-- 监听路由请求，路由分发的组件 -->
      <transition>
          <router-view></router-view>
      </transition>
      <!-- //底部tabbar部分 -->
      <nav class="mui-bar mui-bar-tab">
			  <router-link class="mui-tab-item" to="/home">
				  <span class="mui-icon mui-icon-home"></span>
				  <span class="mui-tab-label">首页</span>
			  </router-link>
			  <router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			  </router-link>
			  <router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			  </router-link>
			  <router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			  </router-link>
		</nav>
  </div>
</template>
<script>
import mui from './lib/mui/dist/js/mui.js'
export default {
   mounted() {
    mui("header, nav").on("tap", "a", function() {
      mui.openWindow({url: this.href})
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translateX(100%);
}
.v-leave-to {
  transform: translate(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all .4s ease;
}
* {
  touch-action: pan-y;
}
</style>
