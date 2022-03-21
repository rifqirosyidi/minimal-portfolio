import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300&family=PT+Mono"
        rel="stylesheet"
      />
      <body className="bg-white text-black dark:bg-stone-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
