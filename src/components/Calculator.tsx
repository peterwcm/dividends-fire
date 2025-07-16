'use client';

import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Badge } from 'primereact/badge';
import { useState, useRef } from 'react';

const Calculator = () => {
  const [capital, setCapital] = useState(120000);
  const [annualExpense, setAnnualExpense] = useState(20000);
  const [dividendYield, setDividendYield] = useState(4);
  const [dividendGrowthRate, setDividendGrowthRate] = useState(20);
  const [dividendTaxRate, setDividendTaxRate] = useState(30);
  const [inflationRate, setInflationRate] = useState(3);
  const [isReinvesting, setIsReinvesting] = useState(true);
  const [dividendsSummary, setDividendsSummary] = useState(null);
  const dt = useRef(null);

  const calculate = (e) => {
    e.preventDefault();
    let tempCapital = capital;
    const summary = [];

    for (let i = 0; i < 15; i++) {
      const currentDividendYield =
        (dividendYield * Math.pow(1 + dividendGrowthRate / 100, i)) / 100;
      const annualDividends =
        tempCapital * currentDividendYield * (1 - dividendTaxRate / 100);

      summary.push({
        year: i + 1,
        annualDividends,
        dividendYield: currentDividendYield,
        monthlyExpense:
          (annualExpense / 12) * Math.pow(1 + inflationRate / 100, i),
        monthlyDividends: annualDividends / 12,
      });

      if (isReinvesting) {
        tempCapital += annualDividends;
      }
    }
    setDividendsSummary(summary);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const formatPercent = (value) => {
    return value.toLocaleString('en-US', {
      style: 'percent',
      minimumFractionDigits: 2,
    });
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const fireTemplate = (rowData) => {
    return (
      <Badge
        value={rowData.monthlyDividends < rowData.monthlyExpense ? 'No' : 'Yes'}
        severity={rowData.monthlyDividends < rowData.monthlyExpense ? 'danger' : 'success'}
      />
    );
  };

  const annualDividendsTemplate = (rowData) => {
    return formatCurrency(rowData.annualDividends);
  };

  const dividendYieldTemplate = (rowData) => {
    return formatPercent(rowData.dividendYield);
  };

  const monthlyExpenseTemplate = (rowData) => {
    return formatCurrency(rowData.monthlyExpense);
  };

  const monthlyDividendsTemplate = (rowData) => {
    return formatCurrency(rowData.monthlyDividends);
  };

  const header = (
    <div className="p-text-right">
      <Button className="fire-calculator__export" icon="pi pi-external-link" label="Export"
        onClick={exportCSV} />
    </div>
  );

  return (
    <div>
      <h5>FIRE Calculator</h5>

      <div className="p-grid">
        <div className="p-col-12">
          <form className="fire-calculator" onSubmit={calculate}>
            <div className="p-grid p-fluid">
              <div className="p-col-6">
                <div className="p-field">
                  <label htmlFor="capital">Capital</label>
                  <div className="p-inputgroup">
                    <InputNumber value={capital} onValueChange={(e) => setCapital(e.value)} id="capital" placeholder="e.g. 200000" min={0} mode="currency"
                      currency="USD" locale="en-US" required />
                  </div>
                </div>
              </div>
              <div className="p-col-6">
                <div className="p-field">
                  <label htmlFor="annual-expense">Annual Expense</label>
                  <div className="p-inputgroup">
                    <InputNumber value={annualExpense} onValueChange={(e) => setAnnualExpense(e.value)} id="annual-expense" placeholder="e.g. 100000" min={0}
                      mode="currency" currency="USD" locale="en-US" required />
                  </div>
                </div>
              </div>
              <div className="p-col-6 p-md-3">
                <div className="p-field">
                  <label htmlFor="dividend-yield">Dividend Yield</label>
                  <div className="p-inputgroup">
                    <InputNumber value={dividendYield} onValueChange={(e) => setDividendYield(e.value)} id="dividend-yield" placeholder="e.g. 4.00%" suffix="%" min={0}
                      max={100} mode="decimal" minFractionDigits={2} maxFractionDigits={2} required />
                  </div>
                </div>
              </div>
              <div className="p-col-6 p-md-3">
                <div className="p-field">
                  <label htmlFor="dividend-growth-rate">Dividend Growth Rate</label>
                  <div className="p-inputgroup">
                    <InputNumber value={dividendGrowthRate} onValueChange={(e) => setDividendGrowthRate(e.value)} id="dividend-growth-rate" placeholder="e.g. 20.00%" suffix="%"
                      min={0} max={100} mode="decimal" minFractionDigits={2} maxFractionDigits={2}
                      required />
                  </div>
                </div>
              </div>
              <div className="p-col-6 p-md-3">
                <div className="p-field">
                  <label htmlFor="dividend-tax-rate">Dividend Tax Rate</label>
                  <div className="p-inputgroup">
                    <InputNumber value={dividendTaxRate} onValueChange={(e) => setDividendTaxRate(e.value)} id="dividend-tax-rate" placeholder="e.g. 30.00%" suffix="%"
                      min={0} max={100} mode="decimal" minFractionDigits={2} maxFractionDigits={2}
                      required />
                  </div>
                </div>
              </div>

              <div className="p-col-6 p-md-3">
                <div className="p-field">
                  <label htmlFor="inflation-rate">Inflation Rate</label>
                  <div className="p-inputgroup">
                    <InputNumber value={inflationRate} onValueChange={(e) => setInflationRate(e.value)} id="inflation-rate" placeholder="e.g. 3.00%" suffix="%" min={0}
                      max={100} mode="decimal" minFractionDigits={2} maxFractionDigits={2} required />
                  </div>
                </div>
              </div>

              <div className="p-col-12">
                <div className="p-field-checkbox">
                  <Checkbox checked={isReinvesting} onChange={(e) => setIsReinvesting(e.checked)} id="is-reinvesting" />
                  <label htmlFor="is-reinvesting">Reinvesting dividends annually?</label>
                </div>
              </div>

              <div className="p-col">
                <Button className="fire-calculator__submit" type="submit" label="Calculate" />
              </div>
            </div>
          </form>
        </div>

        {dividendsSummary && (
          <div className="p-col-12">
            <DataTable ref={dt} exportFilename="Summary of Return" value={dividendsSummary} header={header}>
              <Column field="year" header="Year"></Column>
              <Column field="annualDividends" header="Annual Dividends (After Tax)" body={annualDividendsTemplate}></Column>
              <Column field="dividendYield" header="Dividend Yield" body={dividendYieldTemplate}></Column>
              <Column field="monthlyExpense" header="Monthly Expense" body={monthlyExpenseTemplate}></Column>
              <Column field="monthlyDividends" header="Monthly Dividends (After Tax)" body={monthlyDividendsTemplate}></Column>
              <Column header="FIRE" body={fireTemplate}></Column>
            </DataTable>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
