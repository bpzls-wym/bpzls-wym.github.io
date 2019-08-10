<template>
    <div class="container">
        <div class="row">
            <div id="home" class="col-sm-12 text-center">
                <div class="background">
                    <h1>欢迎大家品尝pizza!</h1>
                    <h2>这里有你非常喜欢的pizza!</h2>
                    <button @click="goToLink" class="btn btn-success">Let's order!</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        methods:{
            goToLink:function(){
                // 跳转到上次浏览页面
                // this.$router.go(-1)

                // 跳转到指定浏览页面
                // this.$router.replace('/login')

                // 跳转到指定名字页面
                // this.$router.replace({name:'registerLink'})

                // 通过push进行跳转
                // this.$router.push('/about')
                this.$router.push({name:'adminLink'})
            }
        }
    }
</script>

<style scoped>
    #home {
        background: url('../../src/assets/pizza.jpg');
        height: 90vh;
        padding: 20% 15%;
    }
    h1,h2 {
        margin: 6%;
    }
    .background {
        background-color: #eee;
        opacity: 0.8;
        max-width: 70vw;
        padding: 20px 0;
    }
</style>

