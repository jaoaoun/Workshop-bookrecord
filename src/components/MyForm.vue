<template>
  <!-- <form
    @submit.prevent="
      btnFunc({
        name,
        description,
        date,
        author,
        rating,
        cover,
      })
    "
  > -->
  <form @submit.prevent="addBook({
        name,
        description,
        date,
        author,
        rating,
        cover
  })">
    <div class="form-group">
      <label>Book name</label>
      <input
        v-model="name"
        type="text"
        class="form-control"
        placeholder="Enter book name"
      />
    </div>
    <div class="form-group">
      <label>Book Description</label>
      <textarea
        v-model="description"
        type="text"
        class="form-control"
        placeholder="Enter book description"
      ></textarea>
    </div>
    <div class="form-group">
      <label>Finished Date</label>
      <input v-model="date" type="date" class="form-control" />
    </div>
    <div class="form-group">
      <label>Book Author</label>
      <input
        v-model="author"
        type="text"
        class="form-control"
        placeholder="Book Author"
      />
    </div>
    <div class="form-group">
      <label>Book Rating</label>
      <input
        v-model="rating"
        type="number"
        class="form-control"
        placeholder="Book Rating"
      />
    </div>
    <div class="form-group">
      <label>Book Cover</label>
      <input
        v-model="cover"
        type="text"
        class="form-control"
        placeholder="Book Image URL"
      />
    </div>
    <button type="submit" class="btn btn-primary">{{textButton}}</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Form",
  data: function(){ //เราต้องดึงค่ามาจาก store เลยต้องมาcheck initial state ว่าถ้ามีค่าให้เอาค่ามาโชว์
    if(this.$route.params && this.$route.params.id) return {...this.$store.state.books[this.$route.params.id]}
    //ถ้าthis.$route.params(ตัว/id)กับthis.$route.params.id(คือid)มีค่า ให้เอาค่าจาก store มาเป็นโชว์
    //ค่าที่โชว์จะเอามาจากid ซึ่งidจะใช้เป็นindexของarray
    else return {
      name:"",
      description:"",
      date: "",
      author: "",
      rating: 0,
      cover: "https://data.whicdn.com/images/331489284/original.jpg"
      // books: this.$store.state.books ลบออก
    }
  },
  methods: {
    ...mapActions([
      "addBook"
    ])
    // testSubmit(){  ไม่จำเป็นต้องใช้
    //   console.log("name :",this.name,"desc :",this.description);
    // }
  },
  computed: {
    textButton(){
      if(this.$route.path == "/add-book") return "ADD BOOK"; //check path as add or edit
      else return "EDIT BOOK"
    }
  }
  // watch:{  ลบออก
  //   books(){
  //     console.log("test log books from store",this.$store.state.books)
  //   }
  // }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box label {
  width: 100%;
  display: block;
  text-align: left;
}
</style>
