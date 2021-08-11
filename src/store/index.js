import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'
import record from './record'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error){
      state.error = error
    },
    clearError(state){
      state.error = null
    }
  },
  actions: {
     async featchCurrency() {
      
       const res =  await fetch(`https://api.exchangerate-api.com/v4/latest/EUR`)
       return await res.json()
      }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info,category, record
  }
})
  // https://api.exchangerate-api.com/v4/latest/EUR
  // const res =  await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
  // const key = process.env.VUE_APP_FIXER