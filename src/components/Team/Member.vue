<template>
  <div>
    <div class="main">
      <div class="title2">
        <b-img left alt="Left image" src="/static/icon.png" height="30px"></b-img>
        <div class="name">
          <span class="title2name" >主要成员简介</span>
        </div>
      </div>
      <div v-for="(member, index) in $store.state.members" class="intro">
        <b-row>
          <b-col cols="3" style="text-align: center;">
            <b-img-lazy thumbnail v-bind="mainProps" rounded="0" :alt="member.name+member.position" :src="getImg(member.img)"></b-img-lazy>
            <span style="margin-top: 5px;">{{member.name}}</span>
            <span>{{member.position}}</span>
            <span>Email: {{member.email}}</span>
          </b-col>
          <b-col cols="9">
            <span style="text-indent: 2rem; font-size: 11px; line-height: 18px; letter-spacing: 1px;" v-for="(detail, index) in getDetail(member.introduction)">{{detail}}</span>
          </b-col>
        </b-row>
        <hr style="height:3px;border:none;border-top:1px ridge green; margin-top: 20px" />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Member",
      data(){
          return {
            mainProps: { width: 75, height: 95}
          }
      },
      methods: {
        getImg(img){
          if(img.length === 0){
            return '/static/members/none.jpg'
          }
          return img
        },
        getDetail(detail){
          return detail.split('\n')
        }
      }
    }
</script>

<style scoped>
  .main{
    padding: 20px;
    width: auto;
    overflow: hidden;
  }
  .title2 {
    text-align: left;
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
  .intro {
    min-width: 100px;
    text-align: left;
  }
  span{
    display: block;
    font-size: 12px;
  }
</style>
