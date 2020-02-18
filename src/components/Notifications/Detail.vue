<template>
  <div class="main">
    <div class="title2">
      <b-img left alt="Left image" src="/static/icon.png" height="50px"></b-img>
      <div class="name">
        <span class="title2name" >{{title}}</span>
      </div>
    </div>
    <div class="content">
      <h1>{{data.name}}</h1>
      <p style="text-align: right; margin-top: 20px; ">发布时间：{{data.time}}</p>
      <hr style="height:5px;border:none;border-top:3px ridge green; margin-top: 20px; margin-bottom: 30px;" />
      <div style="min-height: 250px;">
        <p v-for="(detail, index) in data.detail" style="text-align: left; margin: 20px 20px 20px 20px; line-height: 2.5rem; text-indent: 2rem;">{{detail}}</p>
        <p style="text-align: right; margin: 50px 40px 20px 20px;">{{data.author}}</p>
      </div>
      <hr style="height:4px;border:none;border-top:1.5px ridge green; margin-top: 50px; margin-bottom: 30px;" />
    </div>
    <b-row>
      <b-col>
        <a v-if="index>0" @click="prev()">上一篇</a>
      </b-col>
      <b-col>
        <a @click="back()">返回</a>
      </b-col>
      <b-col>
        <a v-if="index<total-1" @click="next()">下一篇</a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
    export default {
      name: "Detail",
      data(){
        return {
          index: 0,
          type: 'Notification',
          total: 0,
          data: {name: '暂无数据', time: '暂无数据', detail: ['暂无数据'], author: ''},
          title: '详情'
        }
      },
      methods:{
        prev(){
          this.index -= 1
          if(this.type === 'Notification'){
            this.data = this.$store.state.notifications[this.index]
          }
          else{
            this.data = this.$store.state.news[this.index]
          }
        },
        next(){
          this.index += 1
          if(this.type === 'Notification'){
            this.data = this.$store.state.notifications[this.index]
          }
          else{
            this.data = this.$store.state.news[this.index]
          }
        },
        back(){
          this.$router.go(-1)
        }
      },
      mounted() {
        this.type = this.$route.params.type
        this.index = this.$route.params.index
        if(this.type === 'Notification'){
          this.data = this.$store.state.notifications[this.$route.params.index]
          this.total = this.$store.state.notifications.length
          this.title = '通知公告/详情'
        }
        else{
          this.data = this.$store.state.news[this.$route.params.index]
          this.total = this.$store.state.news.length
          this.title = '最新动态/详情'
        }
      }
    }
</script>

<style scoped>
  h1 {
    font-size: 20px;
    font-weight: 700;
  }
  .main {
    position: relative;
    width: 900px;
    margin: auto;
    min-height: 600px;
  }
  .content {
    padding: 20px 20px 0 20px;
    white-space: pre-line;
  }
  .title2 {
    text-align: left;
    background: rgb(12,104,55);
    height: 50px;
    margin-bottom: 20px;
  }
  .title2 .name{
    background: rgb(12,104,55);
    position: absolute;
    height: 30px;
    margin-left: 31.66px;
    padding-left: 20px;
  }
  .title2name {
    line-height: 50px;
    color: #fff;
    font-weight:700;
    letter-spacing: 1px;
  }
  p {
    padding: 0 !important;
  }
  a{
    margin: 0 20px 0 20px;
    color: #42b983;
  }
  a:hover{
    color: #42b983;
    text-decoration: underline;
  }
</style>
