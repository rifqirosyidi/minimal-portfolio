import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;700&family=PT+Mono&family=Outfit"
        rel="stylesheet"
      />
      <body className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white transition duration-1000 ease-in-out">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
