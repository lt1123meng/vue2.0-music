<!--
注入MHeader,tab组件
路由显示位置
keep-alive  vue内置组件 避免重复渲染
-->
<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'

  export default {
    name: 'app',
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style>
</style>
