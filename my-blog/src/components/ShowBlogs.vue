<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h2>博客总览</h2>
    <input type="text" placeholder="搜索" v-model='search'>
    <div v-for="blog in filteredBlogs" class="single-blog">
        <router-link v-bind:to="'/blog/'+blog.id"><h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
        </router-link>
        <article>
            {{blog.body | snippet}}
        </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowBlogs',
  data(){
      return{
          blogs:[],
          search:''
      }
  },
  created:function(){
      this.$http.get('./../static/posts.json')
      .then((data)=>{
        //   console.log(data)
        // console.log(data.body.slice(0,10))
        this.blogs = data.body.slice(0,10)
      })
  },
//计算属性
computed:{
    filteredBlogs:function(){
        return this.blogs.filter((blog)=>{
            return blog.title.match(this.search)
        })
    }
},
// 自定义指令局部
directives:{
    'rainbow':{
        bind(el,binding,vnode){
            el.style.color='#'+Math.random().toString(16).slice(2,8)
        }
    }
},
// 自定义选择器局部
filters:{
    // 'to-uppercase':function(value){
    //     return value.toUpperCase()
    // }
    // es6函数方法
    toUppercase(value){
        return value.toUpperCase()
    }
}
  
}
</script>

<style scoped>
    #show-blogs * {
        box-sizing: border-box;
    }
    #show-blogs {
        margin: 0 auto;
        max-width: 800px;
    }
    .single-blog {
        padding: 20px;
        margin: 20px 0;
        background-color: #eee;
    }
    .single-blog h3 {
        margin-top: 5px;
    }
    .single-blog a {
        text-decoration: none;
    }
    input{
        display:block;
        padding: 10px 20px;
        width: 100%;
        border:0;
    }
</style>
