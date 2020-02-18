<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name: "Previous",
      data(){
        return {
          title: 'previous'
        }
      }
    }
</script>

<style scoped>
  .main {
    position: relative;
    width: 900px;
    margin: auto;
    min-height: 600px;
  }
</style>
