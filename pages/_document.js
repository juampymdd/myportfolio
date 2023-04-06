import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Portfolio web"></meta>
          <meta name="keywords" content="desarrollo web, diseño web, marketing digital, aplicaciones web, aplicaciones moviles, desarrollo de aplicaciones"></meta>
          <meta name="author" content="Juan Pablo Maddoni"></meta>
        </Head>
        <body  >
          <Main  />
          <NextScript />
        </body>
      </Html>
    )
    }
}