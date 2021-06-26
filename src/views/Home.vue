<template>
  <div class="home">
    <Card>
      <template #content>
        <h5>FIRE Calculator</h5>

        <div class="p-grid">
          <div class="p-col-12 p-md-5">
            <form @submit.prevent="greet">

              <div class="p-grid p-fluid">
                <div class="p-col-12">
                  <div class="p-field">
                    <label for="capital">Capital</label>
                    <div class="p-inputgroup">
                      <span class="p-inputgroup-addon">$</span>

                      <InputNumber v-model="capital" id="capital" placeholder="e.g. 200000" suffix="%" :min="0"
                                   :max="100" />
                    </div>
                  </div>
                </div>
                <div class="p-col-12">
                  <div class="p-field">
                    <label for="annual-expense">Annual Expense</label>
                    <div class="p-inputgroup">
                      <span class="p-inputgroup-addon">$</span>

                      <InputNumber v-model="annualExpense" id="annual-expense" placeholder="e.g. 100000" suffix="%"
                                   :min="0" />
                    </div>
                  </div>
                </div>
                <div class="p-col-6">
                  <div class="p-field">
                    <label for="dividend-yield">Dividend Yield</label>
                    <div class="p-inputgroup">

                      <InputNumber v-model="dividendYield" id="dividend-yield" placeholder="e.g. 4" suffix="%" :min="0"
                                   :max="100" />
                      <span class="p-inputgroup-addon">%</span>
                    </div>
                  </div>
                </div>
                <div class="p-col-6">
                  <div class="p-field">
                    <label for="dividend-growth-rate">Dividend Growth Rate</label>
                    <div class="p-inputgroup">

                      <InputNumber v-model="dividendGrowthRate" id="dividend-growth-rate" placeholder="e.g. 20"
                                   suffix="%" :min="0" :max="100" />
                      <span class="p-inputgroup-addon">%</span>
                    </div>
                  </div>
                </div>
                <div class="p-col-6">
                  <div class="p-field">
                    <label for="dividend-tax-rate">Dividend Tax Rate</label>
                    <div class="p-inputgroup">

                      <InputNumber v-model="dividendTaxRate" id="dividend-tax-rate" placeholder="e.g. 30" suffix="%"
                                   :min="0" :max="100" />
                      <span class="p-inputgroup-addon">%</span>
                    </div>
                  </div>
                </div>

                <div class="p-col-6">
                  <div class="p-field">
                    <label for="inflation-rate">Inflation Rate</label>
                    <div class="p-inputgroup">

                      <InputNumber v-model="inflationRate" id="inflation-rate" placeholder="e.g. 3" suffix="%" :min="0"
                                   :max="100" />
                      <span class="p-inputgroup-addon">%</span>
                    </div>
                  </div>
                </div>

                <div class="p-col">
                  <Button type="submit" label="Calculate" />
                </div>
              </div>
            </form>
          </div>

          <div class="p-col-12 p-md-7">
            <DataTable ref="table" exportFilename="Summary of Return" :value="cars" responsiveLayout="scroll">
              <template #header>
                <div class="p-text-right">
                  <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                </div>
              </template>
              <Column field="year" header="Year"></Column>
              <Column field="annualDividends" header="Annual Dividends">
                <template #body="slotProps">
                  {{formatCurrency(slotProps.data.annualDividends)}}
                </template>
              </Column>
              <Column field="yield" header="Yield"></Column>
              <Column field="monthlyExpense" header="Monthly Expense">
                <template #body="slotProps">
                  {{formatCurrency(slotProps.data.monthlyExpense)}}
                </template>
              </Column>
              <Column field="monthlyDividends" header="Monthly Dividends (After Tax)">
                <template #body="slotProps">
                  {{formatCurrency(slotProps.data.monthlyDividends)}}
                </template>
              </Column>
              <Column header="FIRE">
                <template #body="slotProps">
                  <Badge :value="slotProps.data.monthlyDividends < slotProps.data.monthlyExpense ? 'No' : 'Yes' "
                         :severity="slotProps.data.monthlyDividends < slotProps.data.monthlyExpense ? 'danger' : 'success' ">
                  </Badge>
                </template>
              </Column>
            </DataTable>
          </div>
        </div>
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
        {
          year: 1,
          annualDividends: 240000,
          yield: '8.00%',
          monthlyExpense: 25000,
          monthlyDividends: 20000,
        },
        {
          year: 2,
          annualDividends: 242400,
          yield: '8.08%',
          monthlyExpense: 25750,
          monthlyDividends: 20200,
        },
        {
          year: 3,
          annualDividends: 244824,
          yield: '8.16%',
          monthlyExpense: 26523,
          monthlyDividends: 40402,
        },
      ],
    };
  },
  methods: {
    greet() {
      this.message = 'Hello ' + this.text;
    },
    formatCurrency(value) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    },
    exportCSV() {
      this.$refs.table.exportCSV();
    },
  },
};
</script>
