<template>
  <div id="product-list-one">
    product-list-one
    <ul>
        <li v-for="product in saleProducts">
            <span class="name">{{product.name}}</span>
            <span class="price">${{product.price}}</span>

        </li>
    </ul>
    <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import {mapActions} from "vuex"
export default {
  computed:{
      products(){
          return this.$store.state.products
      },
      ...mapGetters([
          "saleProducts"
      ])
  },
  methods:{
      ...mapActions([
          "reducePrice"
      ])
  }
}
</script>

<style scoped>
    #product-list-one {
        background: #FFF8B1;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }
    #product-list-one ul {
        padding: 0;
        list-style-type: none;
    }
    #product-list-one li {
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
