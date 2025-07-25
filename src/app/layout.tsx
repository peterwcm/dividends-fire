
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { GoogleTagManager } from '@next/third-parties/google'
import { Montserrat } from "next/font/google";

import Footer from '../components/Footer';
import Header from '../components/Header';
import theme from '../theme';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <title>Dividends FIRE Calculator - Achieve Financial Independence</title>
        <meta name="description" content="Calculate when you can retire with dividend growth investing. Our FIRE calculator helps you pick the right dividend growth stocks to achieve financial independence in 10 years or less." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <GoogleTagManager gtmId="GTM-M94QLZW" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />

            <Box component={'main'}>
              {children}
            </Box>

            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
