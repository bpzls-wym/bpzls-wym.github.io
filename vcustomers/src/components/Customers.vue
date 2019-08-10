<template>
  <div class="customers container">
    <alert v-if="alert" v-bind:message="alert"></alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" placeholder="搜索" class="form-control" v-model="filterInput">
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody> 
        <tr v-for="customer in filterBy(arrayCustomers,filterInput)">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td><router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'customers',
  data () {
    return {
      arrayCustomers:[],
      alert:"",
      filterInput:""
    }
  },
  components:{
    Alert
  },
  methods:{
    fetchCustomer(){
      this.$http.get("http://localhost:3000/users").then((data)=>{
        // console.log(data)
        this.arrayCustomers = data.data
      })
    },
    filterBy(arry,value){
      return arry.filter((val)=>{
        return val.name.match(value)
      })
    }
  },
  created(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert
    }
    this.fetchCustomer()
  },
  updated(){
    this.fetchCustomer()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
