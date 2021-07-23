<template>
  <div class="page">
    <header class="header">
      <Menu />
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      <div>
        <p>
          <strong>FIRE Calculator App</strong> by
          <a href="https://github.com/peterwcm" target="_blank">Peter Wong</a>
          © {{ new Date().getFullYear() }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
  margin: 0;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main {
  padding: 0 1rem;
}
</style>
