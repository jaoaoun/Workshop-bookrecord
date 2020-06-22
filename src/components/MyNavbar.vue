<template>
  <div >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add-book">Add Book</router-link>
          </li>
        </ul>
      </div>
    </div>

    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navbar'
};
</script>

<style scoped>
    .container{
        margin-top: 0;
    }
</style>
