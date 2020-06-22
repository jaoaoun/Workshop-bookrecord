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
    },
    //1)สร้างเพิ่ม เพื่อให้สามารถ editbook ได้
    editBook(state,payload){
      state.books[payload.index] = payload.data
      //2)booksของเราเป็นarray เลยให้letไปที่indexของค่าที่editมา และให้มีค่า=data (คือใหม่ไปทับเก่าเลย)
    }
  },
  actions: {
    addBook({commit},payload){
      // console.log("test addbook",payload)
      commit("addBook",payload)
    },
    editBook({commit},payload){
      commit("editBook",payload) //3)commitไปที่editBookแล้วส่งpayloadไป
    }
  },
  modules: {
  }
})
