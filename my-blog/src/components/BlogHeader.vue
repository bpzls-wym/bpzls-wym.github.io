<template>
    <nav  class="blog-header">
        <ul>
            <li>
                <router-link to='/' exact>博客</router-link>
                <router-link to='/addBlog' exact>写博客</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:'blog-header'
}
</script>
<style scoped>
    ul {
        list-style-type: none;
        text-align: center;
        margin: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #fff;
        text-decoration: none;
        padding: 12px 18px;
        display: inline-block;
        margin-right: 10px;
        border-radius: 5px;
    }
    nav {
        background-color: crimson;
        padding: 30px 0;
        margin-bottom: 40px;
    }
    .router-link-active {
        background: rgba(255,255,255,.9);
        color:#333;
    }
</style>



