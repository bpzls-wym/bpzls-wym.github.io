<template>
  <div id="app">
    <One></One>
    <Two></Two>
  </div>
</template>

<script>
import One from './components/One'
import Two from './components/Two'

export default {
  name: 'App',
  components: {
    One,Two
  }
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
</style>
