<template>
    <div id="single-blog">
        <h2>{{blog.title}}</h2>
        <p>{{blog.body}}</p>
    </div>
</template>

<script>
export default {
    name:'single-blog',
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created:function(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
        .then((data)=>{
            this.blog = data.body
        })
    }
}
</script>

<style scoped>
    #single-blog {
        max-width:660px;
        margin: 0 auto;
        background-color: #eee;
        border: 1px dotted #aaa;
        box-sizing: border-box;
        padding: 20px;
    }
</style>
