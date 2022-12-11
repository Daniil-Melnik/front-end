import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="favicon.jpg" type="image/jpg"></link>
        <meta name='discription' content='my blog' />        
      </Head>
      <body>
        <Main />
        <div id = "modal"></div>
        <NextScript />
      </body>
    </Html>
  );
}
