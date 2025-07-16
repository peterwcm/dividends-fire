import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
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
        <title>Dividends FIRE</title>
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
