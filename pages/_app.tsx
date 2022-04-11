import { ThemeProvider } from '@mui/material';
// import 'aos/dist/aos.css';
import Script from 'next/script';
import { MUI_DARK_THEME } from '../config/mui-theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='beforeInteractive'
        type='text/javascript'
        src='https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XtYuXA'
        async
      />
      <ThemeProvider theme={MUI_DARK_THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
