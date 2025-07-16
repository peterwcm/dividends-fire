'use client';
import Calculator from '../components/Calculator';
import { Card } from 'primereact/card';

const Home = () => {
  return (
    <div className="home">
      <h2>When can I retire with dividend growth investing?</h2>
      <p>
        By combining the benefits of compounding dividends and the growth of dividends, you can become financially
        independent in 10 years or less. This calculator helps you pick the right dividend growth stock.
      </p>
      <p>
        {`For dividend stock screeners, you can use websites like `}
        <a href="https://seekingalpha.com" target="_blank" rel="noreferrer">Seeking Alpha <i className="pi pi-external-link"></i></a>
        {` or `}
        <a href="https://www.gurufocus.com" target="_blank" rel="noreferrer">GuruFocus.com <i className="pi pi-external-link"></i></a>
        {` to find out about current dividend yield and 5-year dividend growth rate of a stock.`}
      </p>
      <Card>
        <Calculator />
      </Card>
    </div>
  );
};

export default Home;
