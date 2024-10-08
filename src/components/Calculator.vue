<template>
  <h5>FIRE Calculator</h5>

  <div class="p-grid">
    <div class="p-col-12">
      <form class="fire-calculator" @submit.prevent="calculate">

        <div class="p-grid p-fluid">
          <div class="p-col-6">
            <div class="p-field">
              <label for="capital">Capital</label>
              <div class="p-inputgroup">
                <InputNumber v-model="capital" id="capital" placeholder="e.g. 200000" :min="0" mode="currency"
                             currency="USD" locale="en-US" required />
              </div>
            </div>
          </div>
          <div class="p-col-6">
            <div class="p-field">
              <label for="annual-expense">Annual Expense</label>
              <div class="p-inputgroup">
                <InputNumber v-model="annualExpense" id="annual-expense" placeholder="e.g. 100000" :min="0"
                             mode="currency" currency="USD" locale="en-US" required />
              </div>
            </div>
          </div>
          <div class="p-col-6 p-md-3">
            <div class="p-field">
              <label for="dividend-yield">Dividend Yield</label>
              <div class="p-inputgroup">
                <InputNumber v-model="dividendYield" id="dividend-yield" placeholder="e.g. 4.00%" suffix="%" :min="0"
                             :max="100" mode="decimal" :minFractionDigits="2" :maxFractionDigits="2" required />
              </div>
            </div>
          </div>
          <div class="p-col-6 p-md-3">
            <div class="p-field">
              <label for="dividend-growth-rate">Dividend Growth Rate</label>
              <div class="p-inputgroup">
                <InputNumber v-model="dividendGrowthRate" id="dividend-growth-rate" placeholder="e.g. 20.00%" suffix="%"
                             :min="0" :max="100" mode="decimal" :minFractionDigits="2" :maxFractionDigits="2"
                             required />
              </div>
            </div>
          </div>
          <div class="p-col-6 p-md-3">
            <div class="p-field">
              <label for="dividend-tax-rate">Dividend Tax Rate</label>
              <div class="p-inputgroup">
                <InputNumber v-model="dividendTaxRate" id="dividend-tax-rate" placeholder="e.g. 30.00%" suffix="%"
                             :min="0" :max="100" mode="decimal" :minFractionDigits="2" :maxFractionDigits="2"
                             required />
              </div>
            </div>
          </div>

          <div class="p-col-6 p-md-3">
            <div class="p-field">
              <label for="inflation-rate">Inflation Rate</label>
              <div class="p-inputgroup">
                <InputNumber v-model="inflationRate" id="inflation-rate" placeholder="e.g. 3.00%" suffix="%" :min="0"
                             :max="100" mode="decimal" :minFractionDigits="2" :maxFractionDigits="2" required />
              </div>
            </div>
          </div>

          <div class="p-col-12">
            <div class="p-field-checkbox">
              <Checkbox v-model="isReinvesting" id="is-reinvesting" :binary="true" />
              <label for="is-reinvesting">Reinvesting dividends annually?</label>
            </div>
          </div>

          <div class="p-col">
            <Button class="fire-calculator__submit" type="submit" label="Calculate" />
          </div>
        </div>
      </form>
    </div>

    <div class="p-col-12" v-if="dividendsSummary">
      <DataTable ref="table" exportFilename="Summary of Return" :value="dividendsSummary">
        <template #header>
          <div class="p-text-right">
            <Button class="fire-calculator__export" icon="pi pi-external-link" label="Export"
                    @click="exportCSV($event)" />
          </div>
        </template>
        <Column field="year" header="Year"></Column>
        <Column field="annualDividends" header="Annual Dividends (After Tax)">
          <template #body="slotProps">
            {{formatCurrency(slotProps.data.annualDividends)}}
          </template>
        </Column>
        <Column field="dividendYield" header="Dividend Yield">
          <template #body="slotProps">
            {{formatPercent(slotProps.data.dividendYield)}}
          </template>
        </Column>
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


<script>
export default {
  name: 'Calculator',
  data() {
    return {
      numYears: 15,
      capital: 120000,
      annualExpense: 20000,
      dividendYield: 4,
      dividendGrowthRate: 20,
      dividendTaxRate: 30,
      inflationRate: 3,
      isReinvesting: true,
      dividendsSummary: null,
    };
  },
  methods: {
    calculate() {
      let capital = this.capital;
      this.dividendsSummary = [];

      for (let i = 0; i < this.numYears; i++) {
        const dividendYield =
          (this.dividendYield *
            Math.pow(1 + this.dividendGrowthRate / 100, i)) /
          100;
        const annualDividends =
          capital * dividendYield * (1 - this.dividendTaxRate / 100);

        this.dividendsSummary.push({
          year: i + 1,
          annualDividends,
          dividendYield,
          monthlyExpense:
            (this.annualExpense / 12) *
            Math.pow(1 + this.inflationRate / 100, i),
          monthlyDividends: annualDividends / 12,
        });

        if (this.isReinvesting) {
          capital += annualDividends;
        }
      }
    },

    formatCurrency(value) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    },
    formatPercent(value) {
      return value.toLocaleString('en-US', {
        style: 'percent',
        minimumFractionDigits: 2,
      });
    },
    exportCSV() {
      this.$refs.table.exportCSV();
    },
  },
};
</script>

<style lang="scss">
</style>
