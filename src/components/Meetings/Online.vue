<template>
  <div class="main">
    <h1>{{title}}</h1>>
  </div>
</template>

<script>
    export default {
        name: "Online",
      data(){
        return {
          title: 'title'
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
