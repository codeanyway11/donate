import React from 'react';
import flush from 'styled-jsx/server';
import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const {
      html, head, errorHtml, chunks,
    } = renderPage();

    const styles = flush();
    return {
      html,
      head,
      errorHtml,
      chunks,
      styles,
    };
  }

  render() {
    const env = `window.REACT_APP_BUILD_ENV = '${process.env.REACT_APP_BUILD_ENV || 'development'}';`;

    return (
      <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="application-name" content="Donate" />
        <meta name="theme-color" content="#2b5797" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-title" content="Donate" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#f89500" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#2b5797" />

        {/* Replace the following with cdn links*/}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet" />
        <link rel="stylesheet" href="/static/css/index.css" />
      </Head>
      <body>
      <Main />
      <script dangerouslySetInnerHTML={{ __html: env }} />
      <NextScript />
      </body>
      </html>
    );
  }
}
