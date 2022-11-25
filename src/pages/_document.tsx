import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Favicon from '../components/favicon';
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    const sheet = new ServerStyleSheet();

    try {
      // Run the React rendering logic synchronously
      ctx.renderPage = () =>
        originalRenderPage({
          // Useful for wrapping the whole react tree
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
          // Useful for wrapping in a per-page basis
          enhanceComponent: (Component) => Component,
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ) as any,
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind+Guntur:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600&family=Nunito:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <Favicon />
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
