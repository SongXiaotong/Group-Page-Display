<template>
  <div class="indexpage">
    <div class="pagehead">

    </div>
    <div style="text-align: center">
      <div class="mainpage">
        <b-nav style="background: rgb(5,71,25); box-shadow: 0px 10px 5px rgb(226,226,226)">
          <b-nav-item to="/" exact exact-active-class="active">首页</b-nav-item>
          <b-nav-item to="/Notification" exact exact-active-class="active">通知公告</b-nav-item>
          <b-nav-item to="/News" exact exact-active-class="active">最新动态</b-nav-item>
          <b-nav-item-dropdown to="/Meetings" exact exact-active-class="active" id="my-nav-dropdown" text="会议相关" toggle-class="nav-link-custom">
            <b-dropdown-item to="/Meetings/Previous" exact exact-active-class="active">往届会议</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item to="/Meetings/Online" exact exact-active-class="active">在线会议</b-dropdown-item>
<!--            <b-dropdown-divider></b-dropdown-divider>-->
<!--            <b-dropdown-item>Three</b-dropdown-item>-->
          </b-nav-item-dropdown>
          <b-nav-item to="/Group/Organization" exact exact-active-class="active">学组介绍</b-nav-item>
        </b-nav>
        <b-card-body class="page">
          <!-- Child route gets rendered in <router-view> or <nuxt-child> -->
          <router-view style="margin: auto;"></router-view>
          <!-- Or if using Nuxt.js
          <nuxt-child></nuxt-child>
          -->
        </b-card-body>
      </div>
    </div>
    <div class="pagefoot">
      <p class="footcontent">© 2014-2016 • 知识表示与推理学组 • All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .indexpage {
    background: rgb(226,226,226);
    min-width: 960px;
  }
  .pagehead{
    height: 9rem;
    width: 100%;
    min-width: 960px;
    background: rgb(0,88,27);
  }
  .mainpage{
    width: 960px;
    min-height: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }
  .pagefoot{
    height: 3rem;
    width: 100%;
    min-width: 960px;
    background: rgb(0,88,27);
    margin-top: 15px;
    text-align: center;
  }
  .nav-link{
    color: #ffffff !important;
    font-size: 14px;
    font-weight: 900;
    line-height: 25px;
    width: 7rem;
    letter-spacing: 2px;
  }
  .nav-link:hover {
    background: rgb(12,104,55) !important;
  }
  .nav-link.active {
    background: rgb(12,104,55) !important;
  }
  .dropdown-menu {
    width: 3rem !important;
    text-align: center;
    font-size: 14px;
    padding: 4px !important;
  }
  ul.dropdown-menu.show {
    width: 3rem !important;
    text-align: center;
  }
  .dropdown-item{
    color: #006600 !important;
    font-weight: bold;
    padding: 6px !important;
  }
  .page {
    width: 960px;
    text-align: center;
    background: #fff;
    margin-top: 10px;
  }
  .carousel-caption {
    bottom: 3px !important;
    left: 0 !important;
    right: 0 !important;
    padding-top: 3px !important;
    padding-bottom: 3px !important;
    padding-left: 20px !important;
    background: rgba(12,104,55,0.7);
    width: 100%;
    text-align: left !important;
    font-size: 12px;
  }
  .footcontent{
    color: white;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 3px;
    line-height: 3rem;
  }
  .table td {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: pre-line !important;
  }
  .page-item.active .page-link {
    background-color: rgb(12,104,55);
    border-color: rgb(12,104,55);
  }
  .page-link{
    color: rgba(12,104,55, 0.6)
  }
  .page-link:hover {
    color: rgb(12,104,55);
  }
  .page-link:focus {
    box-shadow: 0 0 0 0.2rem rgba(12,104,55, 0.6);
  }
  .carousel-indicators:focus {
    box-shadow: 0 0 0 0.2rem rgba(12,104,55, 0.6);
  }
  .dropdown-item.active, .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: rgba(12,104,55, 0.6);
  }
  .table thead th{
    display: none;
  }
</style>
