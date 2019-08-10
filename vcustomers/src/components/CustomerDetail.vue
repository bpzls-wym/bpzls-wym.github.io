<template>
  <div class="customerDetail container">
    <router-link class="btn btn-default" to="/">返回</router-link>
    <h1 class="page-header">
      {{customers.name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" v-bind:to="'/edit/'+customers.id">编辑</router-link>
        <button class="btn btn-danger" v-on:click="deleteCustomers(customers.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-earphone">{{customers.phone}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-envelope">{{customers.email}}</span></li>
    </ul>

    <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-list-alt">{{customers.education}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-home">{{customers.graduationschool}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-folder-open">{{customers.profession}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-user">{{customers.profile}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'customerDetail',
  data () {
    return {
      customers:{}
    }
  },
  methods:{
    fetchCustomer(id){
      this.$http.get("http://localhost:3000/users/"+id).then((data)=>{
        // console.log(data)
        this.customers = data.data
      })
    },
    deleteCustomers(id){
      console.log(id)
      this.$http.delete("http://localhost:3000/users/"+id).then(()=>{
        this.$router.push({path:"/",query:{alert:"用户删除成功!"}})
      })
    }
  },
  created(){
      this.fetchCustomer(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
