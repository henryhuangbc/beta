import Head from "next/head";

export default function Meta({ page }) {
  let title;
  title = page ? `${page} | CubingSoda` : `CubingSoda`;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta
        name="keywords"
        content="programming, code, coding, js, javascript, py, python, react, reactjs, cubingsoda"
      />
      <meta
        name="description"
        content="My personal website. I showcase my projects and I make posts every once in awhile"
      />

      <meta
        property="og:image"
        content="https://cubingsoda.pages.dev/icon.png"
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="My personal website. I showcase my projects and I make posts every once in awhile"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cubingsoda.pages.dev" />

      <link rel=" icon" href="/icon.png" />
      <link rel="shortcut icon" href="/icon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />

      <title>{title}</title>
    </Head>
  );
}
