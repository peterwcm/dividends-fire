<template>
  <div class="home">
    <Card>
      <template #content>
        <h5>FIRE Calculator</h5>

        <form @submit.prevent="greet">
          <div class="p-grid p-fluid">
            <div class="p-col-12 p-md-4">
              <div class="p-field">
                <label for="capital">Capital</label>
                <div class="p-inputgroup">
                  <span class="p-inputgroup-addon">$</span>

                  <InputNumber v-model="capital" id="capital" placeholder="e.g. 200000" suffix="%" :min="0"
                               :max="100" />
                </div>
              </div>

              <div class="p-field">
                <label for="annual-expense">Annual Expense</label>
                <div class="p-inputgroup">
                  <span class="p-inputgroup-addon">$</span>

                  <InputNumber v-model="annualExpense" id="annual-expense" placeholder="e.g. 100000" suffix="%"
                               :min="0" />
                </div>
              </div>

              <div class="p-field">
                <label for="dividend-yield">Dividend Yield</label>
                <div class="p-inputgroup">

                  <InputNumber v-model="dividendYield" id="dividend-yield" placeholder="e.g. 4" suffix="%" :min="0"
                               :max="100" />
                  <span class="p-inputgroup-addon">%</span>
                </div>
              </div>

              <div class="p-field">
                <label for="dividend-growth-rate">Dividend Growth Rate</label>
                <div class="p-inputgroup">

                  <InputNumber v-model="dividendGrowthRate" id="dividend-growth-rate" placeholder="e.g. 20" suffix="%"
                               :min="0" :max="100" />
                  <span class="p-inputgroup-addon">%</span>
                </div>
              </div>

              <div class="p-field">
                <label for="dividend-tax-rate">Dividend Tax Rate</label>
                <div class="p-inputgroup">

                  <InputNumber v-model="dividendTaxRate" id="dividend-tax-rate" placeholder="e.g. 30" suffix="%"
                               :min="0" :max="100" />
                  <span class="p-inputgroup-addon">%</span>
                </div>
              </div>

              <div class="p-field">
                <label for="inflation-rate">Inflation Rate</label>
                <div class="p-inputgroup">

                  <InputNumber v-model="inflationRate" id="inflation-rate" placeholder="e.g. 3" suffix="%" :min="0"
                               :max="100" />
                  <span class="p-inputgroup-addon">%</span>
                </div>
              </div>

              <Button type="submit" label="Calculate" />
            </div>
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: null,
      text: null,
    };
  },
  methods: {
    greet() {
      this.message = 'Hello ' + this.text;
    },
  },
};
</script>
