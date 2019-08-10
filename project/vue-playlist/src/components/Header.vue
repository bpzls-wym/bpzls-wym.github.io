<template>
  <header v-on:click="change">
  	<h1>{{title1}}---{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props:{
    title:{
      type:String
    }
  },
  data () {
    return {
      title1:'vue.js demo'
    }
  },
  methods:{
    change:function(){
      // this.title='vue.js lala'
      this.$emit('changeTitle','子向父组件传值');
    }
  }
  // beforeCreate:function(){
  //   alert('组件实例化之前执行的函数！')
  // },
  // created:function(){
  //   alert('组件实例化完毕，但页面还未显示！')
  // },
  // beforeMount:function(){
  //   alert('组件挂在前，页面仍未展示，但虚拟Dom已经配置！')
  // },
  // mounted:function(){
  //   alert('组件挂在后，此方法执行后，页面显示！')
  // },
  // beforeUpdate:function(){
  //   alert('组件更新前，页面仍未更新，但虚拟Dom已经配置！') 
  // },
  // updated:function(){
  //   alert('组件更新后，此方法执行后，页面显示！')
  // },
  // beforeDestory:function(){
  //   alert('组件销毁前！')
  // },
  // destoryed:function(){
  //   alert('组件销毁！')
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	header {
		background: lightgreen;
		padding: 20px 0;
		text-align: center;
	}
	h1 {
		color: #222;
	}
</style>