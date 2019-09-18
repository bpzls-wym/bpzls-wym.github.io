<template>
  <div class="two">
    这是第二个组件
    <ul>
      <li v-for="val in saleProducts">
        <span class="name">{{val.name}}</span>
        <span class="price">${{val.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'two',
  data () {
    return {
      products:this.$store.state.products
    }
  },
  computed:{
    saleProducts(){
      return this.$store.getters.saleProducts
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .two {
      background: #D1E4FF;
      box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
      margin-bottom: 30px;
      padding: 10px 20px;
  }
  .two ul {
      padding: 0;
      list-style-type: none;
  }
  .two li {
      margin-right: 10px;
      margin-top: 10px;
      padding: 20px;
      background: rgba(255,255,255,.7)
  }
  .price {
      font-weight: bold;
      color:#860CE8;
      display: block;
  }
</style>