// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    products:[
      {name:"马云",price:"200"},
      {name:"马化腾",price:"120"},
      {name:"马冬梅",price:"40"},
      {name:"马蓉",price:"20"}
    ]
  },
  getters:{
    saleProducts:(state)=>{
      let saleProducts=state.products.map(val=>{
        return {
          name: "**"+val.name+"**",
          price:val.price/2
        }
      })
      return saleProducts
    }
  },
  mutations:{
    reducePrice:(state,payload)=>{
      state.products.forEach(val=>{
        val.price -= payload
      })
    }
  },
  actions:{
    reducePrice:(context,payload)=>{
      setTimeout(()=>{
        context.commit("reducePrice",payload)
      },2000)
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store:store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
