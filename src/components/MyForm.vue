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
    <button type="submit" class="btn btn-primary">ADD BOOK</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Form",
  data: function(){
    return {
      name:"",
      description:"",
      date: "",
      author: "",
      rating: 0,
      cover: "https://data.whicdn.com/images/331489284/original.jpg",
      books: this.$store.state.books
    }
  },
  methods: {
    ...mapActions([
      "addBook"
    ]),
    testSubmit(){
      console.log("name :",this.name,"desc :",this.description);
    }
  },
  watch:{
    books(){
      console.log("test log books from store",this.$store.state.books)
    }
  }

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
