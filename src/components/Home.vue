<template>
  <div class="main">
    <b-container class="bv-example-row">
      <b-row style="width: 900px; min-height: 600px;">
        <b-col cols="5" style="overflow: hidden;">
          <div class="halfpart">
            <div class="picture">
              <div style="position:relative;">
                <b-carousel
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  img-width="720"
                  img-height="480"
                  background="#ababab"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide
                    v-for="(pic, index) in $store.state.pics"
                    :img-src=pic.src
                  >
                    <span>{{pic.message}}</span>
                  </b-carousel-slide>
                </b-carousel>
              </div>
              <hr style="height:5px;border:none;border-top:3px ridge green; margin-top: 40px" />
              <div style="text-align: left;">
                <div class="title2">
                  <b-img left alt="Left image" src="/static/icon.png" height="50px"></b-img>
                  <div class="name">
                    <span class="title2name">相关链接</span>
                  </div>
                </div>
                <b-list-group>
                  <b-list-group-item class="links" v-for="(link, index) in $store.state.links">
                    <div style="position: relative; height: auto; margin: 6px 3px 6px 6px;" >
                      <!--                      <b-img v-bind="mainProps" left :src=link.pic alt="Circle image" style="margin-right: 20px;"></b-img>-->
                      <b-link class="linkshow" :href=link.link>{{link.name}}</b-link>
                    </div>
                  </b-list-group-item>
                </b-list-group>
              </div>
              <hr style="height:5px;border:none;border-top:3px ridge green; margin-top: 40px" />
              <div style="text-align: left;">
                <div class="title2">
                  <b-img left alt="Left image" src="/static/icon.png" height="50px"></b-img>
                  <div class="name">
                    <span class="title2name">登录/认证</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </b-col>
        <b-col cols="7" style="overflow: hidden;">
          <div class="halfpart">
            <div class="subpart">
              <div class="title2">
                <b-img left alt="Left image" src="/static/icon.png" height="50px"></b-img>
                <div class="name">
                  <span class="title2name" >通知公告</span>
                </div>
              </div>
              <b-list-group>
                <b-list-group-item v-for="(noti, index) in notifications">
                  <b-container class="bv-example-row">
                    <b-row>
                      <b-col cols="9" style="overflow: hidden; padding: 0;">
                        <p :style="{'width': '100%', 'text-align': 'left', 'color': noti.color}" @click="getDetail('Notification', index)">{{noti.name}}</p>
                      </b-col>
                      <b-col cols="3" style="overflow: hidden; padding: 0;">
                        <p style="width: 100%; text-align: right; font-size: 10px; position: absolute; bottom: 0; right: 0;">{{noti.time}}</p>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-list-group-item>
              </b-list-group>
            </div>
            <hr style="height:5px;border:none;border-top:3px ridge green; margin-top: 40px" />
            <div  class="subpart">
              <div class="title2">
                <b-img left alt="Left image" src="/static/icon.png" height="50px"></b-img>
                <div class="name">
                  <span class="title2name">最新动态</span>
                </div>
              </div>
              <b-list-group>
                <b-list-group-item v-for="(noti, index) in news">
                  <b-container class="bv-example-row">
                    <b-row>
                      <b-col cols="9" style="overflow: hidden; padding: 0;">
                        <p :style="{'width': '100%', 'text-align': 'left', 'color': noti.color}" @click="getDetail('News', index)">{{noti.name}}</p>
                      </b-col>
                      <b-col cols="3" style="overflow: hidden; padding: 0;">
                        <p style="width: 100%; text-align: right; font-size: 10px; position: absolute; bottom: 0; right: 0;">{{noti.time}}</p>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-list-group-item>
              </b-list-group>
            </div>
          </div>
        </b-col>


      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      slide: 0,
      sliding: null,
      notifications: this.$store.state.notifications.slice(0,5),
      news: this.$store.state.news.slice(0,5),
      mainProps: {blankColor: '#777', width: 35, height: 35, class: 'm1', src: '/static/links/1.jpg'}
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    getDetail(type, index){
      this.$router.push({path:'/'+type+'/detail', name: type+'-Detail', params:{type: type, index: index}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    position: relative;
    width: 900px;
    margin: auto;
    min-height: 600px;
  }
  .halfpart{
    min-height: 600px;
  }
  .bv-example-row{
    margin: 0 !important;
  }
  .title1 {
    margin-top: 35px;
    margin-bottom: 25px;
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
  h1, h2 {
    font-weight: normal;
  }
  h1 {
    font-size: 20px;
    font-weight: 700;
    text-align: left;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .picture {
    padding: 10px 30px 20px 30px;
  }
  .linkshow {
    text-align: center;
    font-size: 13px;
  }
  p{
    word-break:normal;
    white-space:pre-wrap;
    word-wrap:break-word;
    margin: 0;
    display: inline-block;
  }
  .subpart {
    margin-bottom: 20px;
  }
  .m1 {
    border: 1px dashed #000;
  }
  .title2name {
    line-height: 50px;
    color: #fff;
    font-weight:700;
    letter-spacing: 1px;
  }
  .links{
    padding: 0 !important;
  }
</style>
