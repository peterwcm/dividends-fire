'use client';
import { Typography, Link as MuiLink, Paper, Container } from '@mui/material';

import Calculator from '../components/Calculator';

const Home = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" component="h1">
        When Can You Retire With Dividend Growth Investing?
      </Typography>
      <Typography>
        Achieve Financial Independence and Retire Early (FIRE) with our powerful dividend calculator. By harnessing the dual forces of dividend compounding and dividend growth, you can build a sustainable passive income stream. This calculator is designed to help you forecast your journey to financial freedom and select the most promising dividend growth stocks for your portfolio.
      </Typography>

      <Typography variant="h2">
        What is Dividend Growth Investing?
      </Typography>
      <Typography>
        Dividend growth investing is a strategy that focuses on buying stocks of companies that not only pay dividends but also consistently increase them over time. This approach allows your income to grow, protecting your purchasing power against inflation and accelerating your path to retirement.
      </Typography>

      <Typography variant="h2">
        How to Use the Calculator
      </Typography>
      <Typography>
        To get started, you'll need a few key pieces of information about the stock you're analyzing: the current dividend yield and the 5-year dividend growth rate (DGR). You can find this data on financial websites.
      </Typography>
      <Typography>
        For dividend stock screeners and data, you can use websites like{' '}
        <MuiLink href="https://seekingalpha.com" target="_blank" rel="noreferrer">
          Seeking Alpha
        </MuiLink>
        {' or '}
        <MuiLink href="https://www.gurufocus.com" target="_blank" rel="noreferrer">
          GuruFocus.com
        </MuiLink>
        {' '}to find the necessary metrics for your calculations.
      </Typography>

      <Paper elevation={5} sx={{ p: 3, mb: 4 }}>
        <Calculator />
      </Paper>

      <Typography variant="h4">
        Disclaimer
      </Typography>
      <Typography color="text.secondary">
        This calculator is for informational and educational purposes only and should not be considered financial advice. The projections are based on the data you provide and do not guarantee future results. Always conduct your own research and consult with a qualified financial advisor before making any investment decisions.
      </Typography>
    </Container>
  );
};

export default Home;
