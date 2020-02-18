<template>
    <div  class="main" id='testNavBar'>
      <b-card no-body class="overflow-hidden" style="min-height: 500px;">
        <b-row no-gutters>
          <b-col cols="2" clasa="ver" >
            <b-nav vertical style="width: 150px; min-height: 500px;" :class='{ fixedNavbar: isfixTab }'>
              <b-nav-item to="/Group/Organization" exact exact-active-class="active">基本信息</b-nav-item>
              <b-nav-item to="/Group/Member" exact exact-active-class="active">主要成员</b-nav-item>
              <b-nav-item to="/Group/Study" exact exact-active-class="active">研究情况</b-nav-item>
              <b-nav-item to="/Group/Institute" exact exact-active-class="active">相关单位</b-nav-item>
            </b-nav>
          </b-col>
          <b-col cols="10" class="ver">
            <router-view></router-view>
          </b-col>
        </b-row>
      </b-card>
    </div>
</template>

<script>
    export default {
        name: "Description",
      data(){
          return{
            isfixTab: false
          }
      },
      methods: {
        handleTabFix() {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          let offsetTop = document.querySelector('#testNavBar').offsetTop
          // console.log(scrollTop, offsetTop)
          scrollTop > offsetTop ? this.isfixTab = true : this.isfixTab = false
        }
      },
      mounted () {
        window.addEventListener('scroll', this.handleTabFix, true)
      },
      beforeRouteLeave (to, from, next) {
        window.removeEventListener('scroll', this.handleTabFix, true)
        next()
      }
    }
</script>

<style scoped>
  .main {
    position: relative;
    width: 900px;
    margin: auto;
    min-height: 500px;
  }
  .nav-link{
    color: rgb(12,104,55) !important;
    background: #ffffff;
    font-size: 14px;
    font-weight: 900;
    line-height: 25px;
    width: auto;
    letter-spacing: 2px;
  }
  .nav-link:hover {
    background: rgb(12,104,55) !important;
    color: white !important;
  }
  .nav-link.active {
    background: rgb(12,104,55) !important;
    color: white !important;
  }
  .ver {
    min-height: 500px;
  }
  .fixedNavbar{
    position: fixed;
    float: left;
    top: 0;
  }
  </style>
