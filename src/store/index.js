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
    }, //D1)ต้องการให้ลบได้มาสร้างฟังก์ชั่นdelete
    deleteBook(state,payload){
      //D2)ลบค่าค่านั้นออกจากarrayของเรา โดยเช็คจากindexโดยใช้splice
      state.books.splice(payload,1)
    }

  },
  actions: {
    addBook({commit},payload){
      // console.log("test addbook",payload)
      commit("addBook",payload)
    },
    editBook({commit},payload){
      commit("editBook",payload) //3)commitไปที่editBookแล้วส่งpayloadไป
    },
    deleteBook({commit},payload){ //D3)commitไปที่deleteBookแล้วส่งpayloadไป
      commit("deleteBook",payload)
    }
  },
  modules: {
  }
})
