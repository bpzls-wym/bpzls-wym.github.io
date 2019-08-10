<template>
  <div id="home">
    <app-header v-on:changeTitle="updata($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>

// 局部注册组件
import Users from './Users';
import Header from './Header';
import Footer from './Footer';

export default {
  name: 'home',
  data(){
    return {
      users:[
        // {name:'王亚民',position:'web开发',show:false},
        // {name:'王志伟',position:'web开发',show:false},
        // {name:'张西路',position:'php开发',show:false},
        // {name:'叶芽周',position:'开发部经理',show:false},
        // {name:'李小怪',position:'美工',show:false},
        // {name:'郑月',position:'销售专员',show:false},
        // {name:'刘萌萌',position:'英语翻译',show:false},
        // {name:'顾晓',position:'财务主管',show:false},
        // {name:'刘强华',position:'财务',show:false},
        // {name:'聂泽宇',position:'前台',show:false},
        // {name:'唐青山',position:'销售经理',show:false},
      ],
      title:'这是我的一个传值 vue.js string'
    }
  },
  components:{
  	'users':Users,
    'app-header':Header,
    'app-footer':Footer
  },
  methods:{
    updata:function(tit){
      this.title = tit
    }
  },
  created:function(){
    this.$http.get('http://jsonplaceholder.typicode.com/users')
    .then((data)=>{
      console.log(data)
      this.users = data.body
    })
  }
}
</script>

<style scoped>
	h1 {color:purple}
</style>