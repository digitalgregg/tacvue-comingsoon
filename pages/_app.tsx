import "aos/dist/aos.css";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                strategy="beforeInteractive"
                type="text/javascript"
                src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XtYuXA"
                async
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
