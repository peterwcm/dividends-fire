<template>
  <div class="page">
    <header class="header">
      <Menu />
    </header>

    <main class="main">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Menu,
    Footer,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

html,
body,
#app,
.page {
  height: 100%;
}

body {
  margin: 0;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.page {
  display: flex;
  flex-direction: column;
}

.main {
  padding: 1rem;
  flex-grow: 1;
}
</style>
