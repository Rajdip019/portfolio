import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Browsers cache /favicon.ico very aggressively and re-request it by
            convention even without a tag. The ?v= is what actually forces a
            refetch after the icon changes — bump it whenever the photo does. */}
        <link rel="icon" href="/favicon.ico?v=3" sizes="32x32" />
        <link rel="icon" href="/icon.svg?v=3" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#08090b" />
        {/* Without JS the boot loader can never dismiss itself — hide it. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: "#boot-loader{display:none!important}",
            }}
          />
        </noscript>
      </Head>
      <body className="bg-[#08090b]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
