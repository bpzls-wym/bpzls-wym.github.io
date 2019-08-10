import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes} from './routes'
import axios from 'axios'

axios.defaults.headers.common['token'] = 'f34clsdfjl988er0we'
axios.defaults.headers.post['Content-type'] = 'application/json'
// axios跨越请求数据
Vue.prototype.$axios = axios

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: "history",
    scrollBehavior(to,from,savedPosition){
        // return {x:0,y:100}
        // return {selector:'.btn'}
        if(savedPosition){
            return savedPosition
        }else{
            return {x:0, y:0}
        }
    }
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})