import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books:[]
  },
  mutations: {
    addBook(state,payload){
      state.books.push(payload)
    }
  },
  actions: {
    addBook({commit},payload){
      // console.log("test addbook",payload)
      commit("addBook",payload)
    }
  },
  modules: {
  }
})
