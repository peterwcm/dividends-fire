'use client';

import {
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
  Box,
  InputAdornment,
} from '@mui/material';
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
    <Box>
      <Typography variant="h4">
        FIRE Calculator
      </Typography>
      <Box component="form" onSubmit={calculate} sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              label="Capital"
              type="number"
              value={capital}
              onChange={(e) => setCapital(parseFloat(e.target.value))}
              fullWidth
              required
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Annual Expense"
              type="number"
              value={annualExpense}
              onChange={(e) => setAnnualExpense(parseFloat(e.target.value))}
              fullWidth
              required
            />
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <TextField
              label="Dividend Yield"
              type="number"
              value={dividendYield}
              onChange={(e) => setDividendYield(parseFloat(e.target.value))}
              fullWidth
              required
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">%</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <TextField
              label="Dividend Growth Rate"
              type="number"
              value={dividendGrowthRate}
              onChange={(e) => setDividendGrowthRate(parseFloat(e.target.value))}
              fullWidth
              required
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">%</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <TextField
              label="Dividend Tax Rate"
              type="number"
              value={dividendTaxRate}
              onChange={(e) => setDividendTaxRate(parseFloat(e.target.value))}
              fullWidth
              required
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">%</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <TextField
              label="Inflation Rate"
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(parseFloat(e.target.value))}
              fullWidth
              required
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">%</InputAdornment>,
                },
              }}
            />
          </Grid>
          <Grid size={12}>
            <FormControlLabel
              control={<Checkbox checked={isReinvesting} onChange={(e) => setIsReinvesting(e.target.checked)} />}
              label="Reinvesting dividends annually?"
            />
          </Grid>
          <Grid size={12}>
            <Button type="submit" className="fire-calculator__submit" variant="contained" color="primary" size="large" fullWidth>
              Calculate
            </Button>
          </Grid>
        </Grid>
      </Box>

      {dividendsSummary && (
        <Grid container>
          <Grid size={12}>
            <Paper elevation={3}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <Button className="fire-calculator__export" onClick={exportCSV} variant="contained">
                  Export
                </Button>
              </Box>
              <TableContainer ref={dt}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Year</TableCell>
                      <TableCell>Annual Dividends (After Tax)</TableCell>
                      <TableCell>Dividend Yield</TableCell>
                      <TableCell>Monthly Expense</TableCell>
                      <TableCell>Monthly Dividends (After Tax)</TableCell>
                      <TableCell>FIRE</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dividendsSummary.map((row) => (
                      <TableRow key={row.year}>
                        <TableCell>{row.year}</TableCell>
                        <TableCell>{formatCurrency(row.annualDividends)}</TableCell>
                        <TableCell>{formatPercent(row.dividendYield)}</TableCell>
                        <TableCell>{formatCurrency(row.monthlyExpense)}</TableCell>
                        <TableCell>{formatCurrency(row.monthlyDividends)}</TableCell>
                        <TableCell>
                          <Chip
                            label={row.monthlyDividends < row.monthlyExpense ? 'No' : 'Yes'}
                            color={row.monthlyDividends < row.monthlyExpense ? 'error' : 'success'}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box >
  );
};

export default Calculator;
