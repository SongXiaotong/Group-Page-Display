<template>
  <div class="main">
    <div>
      <a href="#1">主要涉及领域</a> | <a href="#2">本研究领域获奖情况</a> | <a href="#3">本领域华人每年召开知识表示与推理国际会议</a>
    </div>
    <div style="margin-top: 20px;">
      <div class="title2">
        <b-img left alt="Left image" src="/static/icon.png" height="30px"></b-img>
        <div class="name">
          <span class="title2name" id="1">主要涉及领域</span>
        </div>
      </div>
      <div style="width: auto; text-align: left; margin: 0px 20px 40px 20px;">
        <span class="content" v-for="(area, index) in getDetail($store.state.studyArea)">{{area}}</span>
      </div>
    </div>
    <div>
      <div class="title2">
        <b-img left alt="Left image" src="/static/icon.png" height="30px"></b-img>
        <div class="name">
          <span class="title2name" id="2">本研究领域获奖情况</span>
        </div>
      </div>
      <div style="width: auto; text-align: left; margin:0px 20px 40px 20px;">
        <div style="margin: 10px;" v-for="(reward, index) in $store.state.studyReward">
          <h2>{{reward.name}}</h2>
          <span class="content" v-for="(turing, index) in reward.data.list">{{turing}}</span>
        </div>
      </div>
    </div>
    <div>
      <div class="title2">
        <b-img left alt="Left image" src="/static/icon.png" height="30px"></b-img>
        <div class="name">
          <span class="title2name" id="3">本领域华人每年召开知识表示与推理国际会议</span>
        </div>
      </div>
      <div style="width: auto; text-align: left;">
        <span class="content">{{ $store.state.studyMeeting.intro}}</span>
        <div style="margin: 10px;" >
          <span class="content" v-for="(meeting, index) in $store.state.studyMeeting.list">{{meeting}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Study",
      data(){
        return{
        }
      },
      methods: {
        getDetail(detail){
          return detail.split('\n')
        }
      },
      // created() {
      //   this.area = this.$store.state.studyArea
      // }
    }
</script>

<style scoped>
  .main{
    padding: 20px;
    width: auto;
    overflow: hidden;
    text-align: left;
  }
  .title2 {
    background: rgb(12,104,55);
    height: 30px;
    margin-bottom: 20px;
  }
  .title2 .name{
    background: rgb(12,104,55);
    position: absolute;
    height: 20px;
    width: auto;
    margin-left: 19px;
    padding-left: 20px;
  }
  .title2name {
    line-height: 30px;
    color: #fff;
    font-weight:700;
    letter-spacing: 1px;
    font-size: 14px;
  }
  span{
    display: block;
    font-size: 14px;
  }
  h2{
    font-size: 14px;
    font-weight: 700;

  }
  .content {
    text-indent: 2rem;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 1px;
  }
  a {
    color: #42b983;
  }
</style>
