<template>
  <div class="card mb-3" style="min-width:400px;max-width:538px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="https://data.whicdn.com/images/331489284/original.jpg" class="card-img" alt />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">test title</h5>
          <p class="card-text">test tesssst</p>
          <p class="card-text">
            <small class="text-muted">By En </small>
          </p>
          <div class="small-box">
            <small class="text-small">DATE: 04/06/2020</small>
            <small class="text-small rating"> RATING: <b>5</b></small>
          </div>
          <div class="small-box">
            <router-link class="btn btn-primary">EDIT</router-link>
            <a href="#" class="btn btn-danger">DELETE</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCard",
  props: ["bookDetail", "index"],
};
</script>

<style scoped>
.small-box {
  display: flex;
  justify-content: space-between;
  margin: 16px;
}
.text-small {
  font-size: 14px;
}
.rating {
  font-size: 16px;
  color: red;
}
.card-img{
  margin: 25px 20px;
}
</style>
