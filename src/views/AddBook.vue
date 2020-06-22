<template>
  <div class="container">
    <h1>Please Add Book</h1>
    <div class="box">
      <my-form />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyForm from "../components/MyForm";
export default {
  name: "AddBook",
  components: {
    MyForm,
  },
};
</script>

<style lang="css">
.box{
    width: 400px;
    margin: 50px auto;
}

</style>
