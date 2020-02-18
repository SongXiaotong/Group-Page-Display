<template>
  <div class="main">
    <div class="title2">
      <b-img left alt="Left image" src="/static/icon.png" height="30px"></b-img>
      <div class="name">
        <span class="title2name" >专业组组织架构</span>
      </div>
    </div>
    <div style="width: auto;">
      <b-table :items="$store.state.organization" class="text-nowrap" bordered>
      </b-table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Organization",
      data(){
          return {

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

</style>
