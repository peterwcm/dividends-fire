<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <h1 class="title">
          <span class="navbar-item__initial">D</span>ividends <span class="navbar-item__initial">F</span>IRE
        </h1>
      </a>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'Menu',
};
</script>

<style lang="scss">
.header {
  padding: 1rem;
}

.navbar {
  margin: 0 auto;
  max-width: 80rem;

  h1 {
    margin: 0;
  }
}

.navbar-brand {
  a {
    color: #bbb;
    text-decoration: none;
  }
}

.navbar-item {
  &__initial {
    color: #888;
  }
}
</style>
