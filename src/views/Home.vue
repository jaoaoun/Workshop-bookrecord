<template>
  <div class="container">
    <h1>My Book</h1>
    <div class="card-deck">
      <my-card 
      v-for="(book,index) in $store.state.books" 
          :bookDetail="book"
          :index="index"
      /> 
      <!-- เราต้องbindค่า :bookDetail="book" คือรับค่า objทั้งหมด -->
      <!-- for book in store / pull data from store -->
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src

import MyCard from "../components/MyCard";
export default {
  name: "home",
  components: {
    MyCard,
  },
};
</script>

<style lang="css">
.container {
  margin-top: 50px;
}
h1 {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
