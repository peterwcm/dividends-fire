<template>
  <footer>
    <div class="copyright">
      Design &amp; Created by
      <a href="https://peterwong.me" target="_blank">Peter Wong</a>
      © {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>


<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
footer {
  padding: 1rem;
  font-size: 80%;
  color: #fff;
  background-color: #88c5cc;
  text-align: center;

  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>
