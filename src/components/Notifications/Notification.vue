<template>
  <div class="main">
    <router-view></router-view>
    <div v-if="isDetail">
      <div class="title2">
        <b-img left alt="Left image" src="/static/icon.png" height="50px"></b-img>
        <div class="name">
          <span class="title2name" >{{title}}</span>
        </div>
      </div>
      <div style="height: auto;">
        <b-table
          id="notifications"
          :fields="fields"
          :items=items
          :per-page="perPage"
          :current-page="currentPage"
        >
          <template v-slot:cell(name)="data">
            <span class="tdWidth" :title="data.item.name" @click="getDetail(data.index)">{{data.item.name}}</span>
          </template>
        </b-table>
      </div>
      <div style="position: relative; height: 80px;">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="notifications"
          class="pag"
        >
        </b-pagination>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      name: "Notification",
      data() {
          return {
            // title: 'null',
            // items: [],
            currentPage: 1,
            perPage: 8,
            fields: [{key:'name', width: 200, label:'Title'}, {key:'time', width: 50}]
          }
        },
      computed: {
        rows() {
          return this.items.length
        },
        items(){
          if(this.$route.path === '/News'){
            return this.$store.state.news
          }
          else{
            return this.$store.state.notifications
          }
        },
        title(){
          if(this.$route.path === '/News'){
            return '最新动态'
          }
          else{
            return '通知公告'
          }
        },
        isDetail(){
          return !(this.$route.path[this.$route.path.length-1] === 'l')
        }
      },
      methods: {
        getDetail(index){
          let type = ''
          if(this.title[0] === '通'){
            type = 'Notification'
          }
          else if(this.title[0] === '最'){
            type = 'News'
          }
          this.$router.push({path:'/'+type+'/detail', name: type+'-Detail', params:{type: type, index: index}})
        }
      }
    }
</script>

<style scoped>
  .main {
    position: relative;
    width: 900px;
    margin: auto;
    min-height: 400px;
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
  .pag {
    position: absolute;
    top: 20px;
  }
  .tdWidth {
    width: 700px !important;
    margin-right: 0 !important;
    text-align: left;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .table thead th{
    display: none;
  }

</style>
