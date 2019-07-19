<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item) in picList" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">Home</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">          
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">          
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      picList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      axios.get("http://www.liulongbin.top:3005/api/getlunbo").then(res => {
        res.status == 200
          ? (this.picList = res.data.message)
          : Toast("请求数据失败");
      });
    }
  }
};
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe img {
  height: 100%;
  width: 100%;
}
.mui-table-view.mui-grid-view {
    background-color: #fff;
    border:none;
}
.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    width: 33.33333333333%;
    border: none;
}
.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 img {
    width: 60px;
    height: 60px;
}
</style>
