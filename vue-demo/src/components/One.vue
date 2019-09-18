<template>
  <div class="one">
    这是第一个组件
    <ul>
      <li v-for="val in products">
        <span class="name">{{val.name}}</span>
        <span class="price">${{val.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import {mapActions} from "vuex"
export default {
  name: 'one',
  computed:{
    products(){
      return this.$store.state.products
    },
    ...mapGetters([
      'saleProducts'
    ])
  },
  methods:{
    ...mapActions([
      "reducePrice"
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .one {
        background: #FFF8B1;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
        margin-bottom: 30px;
        padding: 10px 20px;
  }
  .one ul {
      padding: 0;
      list-style-type: none;
  }
  .one li {
      display: inline-block;
      margin-right: 10px;
      margin-top: 10px;
      padding: 20px;
      background: rgba(255,255,255,.7)
  }
  .price {
      font-weight: bold;
      color:#E8800C;
  }
  button {
      padding: 10px 25px;
      border: none;
      background-color: #E8800C;
      font-size: 14px;
      color:white;
      border-radius: 2px;
      cursor: pointer;
  }
</style>
