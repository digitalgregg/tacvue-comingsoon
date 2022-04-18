import { ThemeProvider } from "@mui/material";
// import 'aos/dist/aos.css';
import Script from "next/script";
import { useEffect } from "react";
import { MUI_DARK_THEME } from "../config/mui-theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    setTimeout(() => {
      document.body.style.opacity = "1";
      document.body.style.pointerEvents = "auto";
    }, 200);
  }, []);

  return (
    <>
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
      <ThemeProvider theme={MUI_DARK_THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
