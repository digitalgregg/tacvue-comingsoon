import { ThemeProvider } from "@mui/material";
// import 'aos/dist/aos.css';
import Script from "next/script";
import { MUI_DARK_THEME } from "../config/mui-theme";
import "swiper/css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="">
        {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-SKMJ4HQPR9');`}
      </Script>

      {/* <Script
        strategy='beforeInteractive'
        type='text/javascript'
        src='https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XtYuXA'
        async
      /> */}

      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.min.js"
        defer
      />
      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/three@0.121.1/examples/js/controls/OrbitControls.js"
        defer
      />
      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js"
        defer
      />
      {/* <Script
        strategy="beforeInteractive"
        async
        type="text/javascript"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WRgkwc"
        defer
      /> */}
      <ThemeProvider theme={MUI_DARK_THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
