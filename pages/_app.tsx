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

      <Script strategy="lazyOnload" id="dataLayer">
        {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-SKMJ4HQPR9');`}
      </Script>
      <Script strategy="lazyOnload" id="_vbset">
        {`var _vbset = _vbset || [];
          _vbset.push(['_account', 'VBT-81870-7905']);
          _vbset.push(['_domain', 'https://tacvue.io']);

          (function() {
            var vbt = document.createElement('script'); vbt.type = 'text/javascript'; vbt.async = true; 
            vbt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.vbt.io/tracker?_account='+_vbset[0][1]+'&_domain='+_vbset[1][1];var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vbt, s);
          })();`}
      </Script>

      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XtYuXA"
        async
      />

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
      <Script
        strategy="beforeInteractive"
        async
        type="text/javascript"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WRgkwc"
        defer
      />
      <Script
        strategy="beforeInteractive"
        async
        type="text/javascript"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=YtBdg6"
        defer
      />
      <Script
        strategy="beforeInteractive"
        async
        type="text/javascript"
        src="https://www.vbt.io/ext/vbtforms.js?lang=en"
        defer
      />
      <ThemeProvider theme={MUI_DARK_THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
