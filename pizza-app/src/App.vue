<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name='orderingGuide'></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name='delivery'></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name='history'></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  export default {
    components:{
      'app-header':Header
    },
    created(){
      // vue跨域请求
      // fetch
      fetch('http://www.thenewstep.cn/test/testToken.php',{
        method:'post',
        headers:{
          'Content-type':'application/json',
          token:'f34clsdfjl988er0we'
        },
        body:JSON.stringify({username:'henry',password:'321321'})
      })
      .then(result => {
        // console.log(result)
        return result.json()
      }).then(data=>{
        console.log(data)
      })

      //config文件夹中的index.js中加上这段代码
      // proxyTable: {
      //   '/apis': {
      //       // 测试环境
      //       target: 'https://goods.footer.com',  // 接口域名
      //       changeOrigin: true,  //是否跨域
      //       pathRewrite: {
      //           '^/apis': ''   //需要rewrite重写的,
      //       }              
      //   }
  }

      // axios
      // this.$axios.post('http://www.thenewstep.cn/test/testToken.php',{
      //   username:'henry',password:'321321'
      // }).then(data=>{
      //   console.log(data)
      // })
    // }
  }
</script>

<style>

</style>
