<template>
  <div id="app" class="wrapper">
    <transition name="zoom">
      <router-view/>
    </transition>
  </div>
</template>
<style lang="scss">
  @import "assets/scss/app";
</style>
<script>
  export default{
    name: 'WeatherApp',
    created(){}
  }
</script>
