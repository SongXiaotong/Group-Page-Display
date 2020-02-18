<template>
  <div class="main">
    <div class="title2">
      <b-img left alt="Left image" src="/static/icon.png" height="30px"></b-img>
      <div class="name">
        <span class="title2name" >相关研究所</span>
      </div>
    </div>
    <div style="width: auto;">
      <span>{{$store.state.insitute.intro}}</span>
      <div style="margin: 10px;" v-for="(institute, index) in $store.state.insitute.list">
        <h2>({{index+1}}) {{institute.name}}</h2>
        <span class="content">{{institute.detail}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Institute"
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
</style>
