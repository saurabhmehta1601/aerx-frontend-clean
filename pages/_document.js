import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>{/* Fonts will be here */}</Head>
        <body
          className="text-gray-100 dark:bg-gray-800 dark:text-gray-200"
          style={{ backgroundColor: "#0F0111" }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
