<template>
  <div class="home">
    <h2>When can I retire with dividend growth investing?</h2>
    <p>By combining the benefits of compounding dividends and the growth of dividends, you can become financially
      independent in 10-year time, or less. This calculator helps you pick the right dividend growth stock.</p>
    <p>For dividend stock screeners, you can use websites like
      <a href="https://seekingalpha.com" target="_blank">Seeking Alpha <i class="pi pi-external-link"></i></a> or
      <a href="https://www.gurufocus.com" target="_blank">GuruFocus.com <i class="pi pi-external-link"></i></a>
      to find out about current dividend yield and 5-year dividend growth rate of a stock.
    </p>
    <Card>
      <template #content>
        <Calculator />
      </template>
    </Card>
  </div>
</template>

<script>
import Calculator from '@/components/Calculator.vue';

export default {
  name: 'Home',
  components: {
    Calculator,
  },
};
</script>

<style lang="scss">
.home {
  max-width: 90rem;
  margin: 0 auto;
}
</style>
