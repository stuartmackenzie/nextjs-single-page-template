import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const gaSrc = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    const gaScript = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_TRACKING_ID}',{page_path: window.location.pathname,});`;
    return (
      <Html lang="en">
        <Head>
          <script async src={gaSrc} />
          <script dangerouslySetInnerHTML={{ __html: gaScript }} />
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
