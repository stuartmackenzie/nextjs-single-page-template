import Head from "next/head";
import styles from "./Layout.module.sass";

import Nav from "../Nav/Nav";

export default function Layout({ settings, children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{settings.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="description" content={settings.description} />
        <meta property="og:image" content={settings.ogImage} />
        <meta name="og:title" content={settings.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="shortcut icon"
          sizes="16x16 24x24 32x32 48x48 64x64"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
      </Head>
      <header className={styles.header}>
        <div className={styles.container}>
          <Nav settings={settings} />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
