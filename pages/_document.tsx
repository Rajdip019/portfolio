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
