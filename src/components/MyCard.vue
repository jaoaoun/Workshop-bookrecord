<template>
  <div class="card mb-3" style="min-width:400px;max-width:538px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="bookDetail.cover" class="card-img" alt />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{bookDetail.name}}</h5>
          <p class="card-text">{{bookDetail.description}}</p>
          <p class="card-text">
            <small class="text-muted">By {{bookDetail.author}} </small>
          </p>
          <div class="small-box">
            <small class="text-small">DATE: {{bookDetail.date}}</small>
            <small class="text-small rating"> RATING: <b>{{bookDetail.rating}}</b></small>
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
