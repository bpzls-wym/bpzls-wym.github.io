<template>
  <div class="one">
    第一个组件
    <ul v-for="(val,index) in products" :key="index">
      <li>
        <span class="name">{{val.name}}</span>
        <span class="price">${{val.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../stor'
export default {
  name: 'one',
  data () {
    return {
      products:this.$store.state.products
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
