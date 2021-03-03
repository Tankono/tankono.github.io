<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello ..."/>
    <mybutton/>
    <API />
  </div>
</template>

<script>

import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import API from './components/ExampleAPIComponent.vue'


Vue.component('mybutton', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Bạn đã bấm {{ count }} lần.</button>'
});

export default {
  name: 'App',
  components: {
    HelloWorld,
    API    
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
