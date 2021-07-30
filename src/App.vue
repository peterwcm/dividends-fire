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
@import '@/styles/base';
</style>
