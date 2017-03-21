<template>
  <div id="app">
    <app-header></app-header>
    <app-house-list></app-house-list>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import House from './components/House'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-house-list': House
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
