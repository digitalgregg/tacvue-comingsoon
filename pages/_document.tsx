import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="/images/tacvue-gradient-icon.svg"
          />
          <link rel="stylesheet" href="/fonts/fonts.css" />
          <script
            src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XtYuXA"
            async
            type="text/javascript"
            defer
          ></script>
          <script
            async
            src="https://www.vbt.io/ext/vbtforms.js?lang=en"
            charSet="utf-8"
          ></script>
          <script
            src="https://www.googletagmanager.com/gtag/js?id=UA-205037825-1"
            async
            type="text/javascript"
            defer
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-205037825-1');
        
          `,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
