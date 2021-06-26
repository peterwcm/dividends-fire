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

        <DataTable :value="cars">
          <Column field="vin" header="Vin"></Column>
          <Column field="year" header="Year"></Column>
          <Column field="brand" header="Brand"></Column>
          <Column field="color" header="Color"></Column>
        </DataTable>
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
      cars: [
        { brand: 'Volkswagen', year: 2012, color: 'Orange', vin: 'dsad231ff' },
        { brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345' },
        { brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr' },
        { brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh' },
        { brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34' },
        { brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj' },
        { brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr' },
        { brand: 'Jaguar', year: 2013, color: 'Orange', vin: 'greg34' },
        { brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5' },
        { brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s' },
      ],
    };
  },
  methods: {
    greet() {
      this.message = 'Hello ' + this.text;
    },
  },
};
</script>
