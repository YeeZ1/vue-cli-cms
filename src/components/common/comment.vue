<template>
  <div class="cmt-container">
    <h4>发表评论</h4>
    <hr />
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in newsComments" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
        <div class="cmt-body">{{ item.content === '' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
    export default {
      data() {
        return {
          newsComments:[],
          pageindex:1,
          msg:''
        }
      },
      created() {
        this.getComments()
      },
      props:['id'],
      methods:{
        getComments() {
          this.$http.get('api/getcomments/' + this.id +'?pageindex=' + this.pageindex)
          .then(res => {
                res.body.status == 0 ? this.newsComments = this.newsComments.concat(res.body.message)  : Toast('请求数据失败')            
          })
        },
        getMore() {
          this.pageindex++
          this.getComments()
        },
        postComment() {
          this.$http.post('api/postcomment/' + this.id , {
            content:this.msg
          }).then(res => {
            if(res.status == 200) {
              //伪造用户输入的数据，添加到data里面的newsComments里面，渲染到UI界面，让用户可以看到自已发表的内容
              //真实的数据已经发送到服务器
              let newInfo = {
                user_name:'匿名用户',
                add_time:Date.now(),
                content:this.msg
              }
              this.newsComments.unshift(newInfo)
              this.msg = ""
            }
          })
        }
      }
    };
</script>
<style scoped>
.cmt-container textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-list {
    margin:5px 0 ;
  }
.cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
</style>
