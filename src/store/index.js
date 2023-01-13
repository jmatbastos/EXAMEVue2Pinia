import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'
import categories from './categories'
import user from './user'
import orders from './orders'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    categories,    
    user,
    orders
  }
 })
