'use client';

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
    const headers = [
      'Year',
      'Annual Dividends (After Tax)',
      'Dividend Yield',
      'Monthly Expense',
      'Monthly Dividends (After Tax)',
      'FIRE',
    ];
    const rows = dividendsSummary.map((row) => [
      row.year,
      formatCurrency(row.annualDividends),
      formatPercent(row.dividendYield),
      formatCurrency(row.monthlyExpense),
      formatCurrency(row.monthlyDividends),
      row.monthlyDividends < row.monthlyExpense ? 'No' : 'Yes',
    ]);

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += headers.join(',') + '\r\n';
    rows.forEach((row) => {
      csvContent += row.join(',') + '\r\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Summary of Return.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h5 className="text-2xl font-bold mb-6">FIRE Calculator</h5>

      <div className="grid grid-cols-1 gap-8">
        <div>
          <form className="bg-white shadow-md rounded-lg p-6" onSubmit={calculate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="capital" className="block text-sm font-medium text-gray-700">Capital</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input type="number" value={capital} onChange={(e) => setCapital(parseFloat(e.target.value))} id="capital" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="e.g. 200000" min={0} required />
                </div>
              </div>
              <div>
                <label htmlFor="annual-expense" className="block text-sm font-medium text-gray-700">Annual Expense</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input type="number" value={annualExpense} onChange={(e) => setAnnualExpense(parseFloat(e.target.value))} id="annual-expense" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="e.g. 100000" min={0} required />
                </div>
              </div>
              <div className="md:col-span-1">
                <label htmlFor="dividend-yield" className="block text-sm font-medium text-gray-700">Dividend Yield</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input type="number" value={dividendYield} onChange={(e) => setDividendYield(parseFloat(e.target.value))} id="dividend-yield" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-7 sm:text-sm border-gray-300 rounded-md" placeholder="e.g. 4.00" min={0} max={100} step="0.01" required />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">%</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1">
                <label htmlFor="dividend-growth-rate" className="block text-sm font-medium text-gray-700">Dividend Growth Rate</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input type="number" value={dividendGrowthRate} onChange={(e) => setDividendGrowthRate(parseFloat(e.target.value))} id="dividend-growth-rate" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-7 sm:text-sm border-gray-300 rounded-md" placeholder="e.g. 20.00" min={0} max={100} step="0.01" required />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">%</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1">
                <label htmlFor="dividend-tax-rate" className="block text-sm font-medium text-gray-700">Dividend Tax Rate</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input type="number" value={dividendTaxRate} onChange={(e) => setDividendTaxRate(parseFloat(e.target.value))} id="dividend-tax-rate" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-7 sm:text-sm border-gray-300 rounded-md" placeholder="e.g. 30.00" min={0} max={100} step="0.01" required />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">%</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1">
                <label htmlFor="inflation-rate" className="block text-sm font-medium text-gray-700">Inflation Rate</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input type="number" value={inflationRate} onChange={(e) => setInflationRate(parseFloat(e.target.value))} id="inflation-rate" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-7 sm:text-sm border-gray-300 rounded-md" placeholder="e.g. 3.00" min={0} max={100} step="0.01" required />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">%</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input checked={isReinvesting} onChange={(e) => setIsReinvesting(e.target.checked)} id="is-reinvesting" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="is-reinvesting" className="font-medium text-gray-700">Reinvesting dividends annually?</label>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Calculate
                </button>
              </div>
            </div>
          </form>
        </div>

        {dividendsSummary && (
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <div className="flex justify-end p-4">
                  <button onClick={exportCSV} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Export
                  </button>
                </div>
                <table ref={dt} className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Dividends (After Tax)</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dividend Yield</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Expense</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Dividends (After Tax)</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FIRE</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dividendsSummary.map((row) => (
                      <tr key={row.year}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.year}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(row.annualDividends)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatPercent(row.dividendYield)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(row.monthlyExpense)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(row.monthlyDividends)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${row.monthlyDividends < row.monthlyExpense ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                            {row.monthlyDividends < row.monthlyExpense ? 'No' : 'Yes'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;