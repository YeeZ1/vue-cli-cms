<template>
    <div class="newsInfo">
        <h3 class="title">{{newInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newInfo.add_time | dateFormat}}</span>
            <span>点击：{{newInfo.click}}次</span>
        </p>
        <hr>
        <div v-html="newInfo.content" class="content"></div>
        <comment :id="this.id"></comment>

    </div>
</template>
<script>
import comment from '../common/comment'
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            //获取地址栏参数，存放到data数据中
            id:this.$route.params.id,
            newInfo:{}
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo() {
            this.$http.get('api/getnew/' + this.id)
            .then(res => {
                res.body.status == 0 ? this.newInfo = res.body.message[0] : Toast('请求数据失败')
            })
        }
    },
    components:{
        //注册子组件
        comment
    }
}
</script>
<style scoped>
    .newsInfo {
        padding: 0 5px;
    }
    .newsInfo .title {
        margin: 15px 0;
        color: red;
        font-size: 16px;
        text-align: center;

    }
    .newsInfo .subtitle {
        display: flex;
        justify-content: space-between;
    }
</style>
