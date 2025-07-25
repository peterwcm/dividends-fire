import '../styles/globals.css';
import { Montserrat } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import Header from '../components/Header';
import Footer from '../components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <title>Dividends FIRE Calculator - Achieve Financial Independence</title>
        <meta name="description" content="Calculate when you can retire with dividend growth investing. Our FIRE calculator helps you pick the right dividend growth stocks to achieve financial independence in 10 years or less." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <GoogleTagManager gtmId="GTM-M94QLZW" />
      </head>
      <body>
        <div className="page">
          <Header />

          <main className="main">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
