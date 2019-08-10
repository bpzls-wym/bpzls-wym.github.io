import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import History from './components/about/History'
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/Phone'
import Person from './components/about/Person'

export const routes = [
    { path: '/', name: 'homeLink', components: {
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    } },
    { path: '/menu', name: 'menuLink', component: Menu },
    { path: '/admin', name: 'adminLink', component: Admin
        // beforeEnter:(to,from,next)=>
        //     {
        //         // 路由独享守卫
        //         // alert('没有登陆，不能访问该页面！')
        //         // next(false)
        //         // if(to.path == '/login' || to.path == '/register') {
        //         //     next()
        //         // }else{
        //         //     alert('您还没有登录，请先登录！')
        //         //     next('/login')
        //         // }
        //     }
    },
    { path: '/about', name: 'aboutLink', redirect:'/contact', component: About,children:[
        {path:'/about/history',name:'historyLink',component:History},
        {path:'/contact',name:'contactLink',redirect:'/person',component:Contact,children:[
            {path:'/phone',name:'phoneNumber',component:Phone},
            {path:'/person',name:'personName',component:Person}
        ]},
        {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
        {path:'/delivery',name:'deliveryLink',component:Delivery}
    ] },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/register', name: 'registerLink', component: Register },
    { path: '*', redirect: '/' }
]

// 全局守卫  最好放main.js中
// router.beforeEach((to,from,next) => {
//     // alert('还未有登录，请您先登录！')
//     // console.log(to)
//     if(to.path == '/login' || to.path == '/register') {
//         next()
//     }else{
//         alert('还未有登录，请您先登录！')
//         next('/login')
//     }
// })