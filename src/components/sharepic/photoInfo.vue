<template>
    <div>
        <div class="photoInfo">
            <h3 class="title">{{newInfo.title}}</h3>
            <p class="subtitle">
                <span>发表时间:{{newInfo.add_time | dateFormat}}</span>
                <span>点击：{{newInfo.click}}次</span>
            </p>
        <hr>
        <!-- 缩略图模块 -->
        <vue-preview :slides="thumsImg"></vue-preview>
        <div v-html="newInfo.content" class="content"></div>
        <comment :id="this.id"></comment>

    </div>
    </div>
</template>
<script>
import comment from '../common/comment.vue'
export default {
    data() {
        return {
            newInfo:{},
            //通过地址栏传参数，获取图片的id
            id:this.$route.params.id,
            thumsImg:[]
        }
    },
    created() {
        this.getInfo()
        this.getThums()
    },
    components:{
        comment
    },
    methods:{
        getInfo() {
            this.$http.get('api/getimageInfo/' + this.id)
            .then( res => {
                // console.log(res);
                if(res.body.status == 0 ) this.newInfo = res.body.message[0]
            })
        },
        getThums() {
            this.$http.get('api/getthumimages/' + this.id)
            .then(res => {
                if(res.body.status == 0) {
                    this.thumsImg = res.body.message
                    this.thumsImg.forEach(ele => {
                        ele.h = 400
                        ele.w = 600
                        ele.msrc = ele.src
                    });
                }                
            })
        }
    }
}
</script>
<style lang="less">
     .photoInfo {
         padding: 10px;
         .title {
             margin: 15px 0;
            color: red;
            font-size: 16px;
            // text-align: center;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
        }
        .my-gallery {
            display: flex;
            flex-wrap: wrap;
        }
        figure {
            margin:0 8px;
            
            img {
                width: 100px;
                vertical-align: top;
                margin-bottom: 10px;
            }
        }
        .content {
            font-size: 14px;
            text-indent: 2em;
            line-height: 24px;
        }
    }
</style>


