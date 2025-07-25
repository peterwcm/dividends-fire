'use client';
import Calculator from '../components/Calculator';

const Home = () => {
  return (
    <div className="home">
      <h1>When Can You Retire With Dividend Growth Investing?</h1>
      <p>
        Achieve Financial Independence and Retire Early (FIRE) with our powerful dividend calculator. By harnessing the dual forces of dividend compounding and dividend growth, you can build a sustainable passive income stream. This calculator is designed to help you forecast your journey to financial freedom and select the most promising dividend growth stocks for your portfolio.
      </p>
      
      <h2>What is Dividend Growth Investing?</h2>
      <p>
        Dividend growth investing is a strategy that focuses on buying stocks of companies that not only pay dividends but also consistently increase them over time. This approach allows your income to grow, protecting your purchasing power against inflation and accelerating your path to retirement.
      </p>

      <h2>How to Use the Calculator</h2>
      <p>
        To get started, you'll need a few key pieces of information about the stock you're analyzing: the current dividend yield and the 5-year dividend growth rate (DGR). You can find this data on financial websites.
      </p>
      <p>
        For dividend stock screeners and data, you can use websites like{' '}
        <a href="https://seekingalpha.com" target="_blank" rel="noreferrer">Seeking Alpha <i className="pi pi-external-link"></i></a>
        {' or '}
        <a href="https://www.gurufocus.com" target="_blank" rel="noreferrer">GuruFocus.com <i className="pi pi-external-link"></i></a>
        {' '}to find the necessary metrics for your calculations.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6">
        <Calculator />
      </div>

      <h2>Disclaimer</h2>
      <p>
        This calculator is for informational and educational purposes only and should not be considered financial advice. The projections are based on the data you provide and do not guarantee future results. Always conduct your own research and consult with a qualified financial advisor before making any investment decisions.
      </p>
    </div>
  );
};

export default Home;