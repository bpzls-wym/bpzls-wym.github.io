<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required>
        <label>博客内容</label>
        <textarea v-model="blog.content"></textarea>
        <div id="checkboxs">
            <label>Vue.js</label>
            <input type="checkbox" value="Vue.js" v-model="blog.categories">
            <label>Vue.js</label>
            <input type="checkbox" value="Node.js" v-model="blog.categories">
            <label>React.js</label>
            <input type="checkbox" value="React.js" v-model="blog.categories">
            <label>Angular.js</label>
            <input type="checkbox" value="Angular.js" v-model="blog.categories">
        </div>
        <label>作者:</label>
        <select v-model="blog.autor">
            <option v-for="autor in autors">{{autor}}</option>
        </select>
        <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div v-if="submmited">
        <p>您的博客发送成功！</p>
    </div>
    <div id="preview">
        <h3>博客纵览</h3>
        <p>博客标题: {{blog.title}}</p>
        <p>博客内容: {{blog.content}}</p>
        <p>博客分类</p>
        <ul>
            <li v-for="category in blog.categories">
                {{category}}
            </li>
        </ul>
        <p>作者：{{blog.autor}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'add-blog',
  components: {
    
  },
  data(){
      return{
          blog:{
              title:'',
              content:'',
              categories:[],
              autor:''
          },
          autors:['张伟','李开放','孙皓'],
          submmited:false
      }
  },
  methods:{
      post:function(){
          this.$http.post('https://jsonplaceholder.typicode.com/posts',{
              title:this.blog.title,
              conten:this.blog.content,
              userId:1
          }).then(function(data){
              console.log(data)
              this.submmited = true
          })
      }
  }
}
</script>

<style scoped>
    #add-blog * {
        box-sizing: border-box;
    }
    #add-blog {
        margin: 20px auto;
        max-width: 600px;
        padding: 20px;
    }
    label {
        display: block;
        margin:20px 0 10px;
    }
    input[type="text"],textarea,select{
        display: block;
        padding: 8px;
        width:100%;
    }
    textarea {
        height: 200px;
    }
    #checkboxs label {
        display:inline-block;
        margin-top: 4px;
    }
    #checkboxs input {
        display: inline-block;
        margin-right: 12px;
    }
    button {
        margin: 20px 0 30px;
        padding: 14px 24px;
        font-size: 18px;
        border:0;
        background-color: crimson;
        border-radius: 3px;
        color:#fff;
        cursor: pointer;
    }
    #preview {
        padding: 10px 26px;
        border: 1px dotted #ccc;
        margin:15px 0;
    }
    #preview h3 {
        margin-top: 10px;
    }
</style>
