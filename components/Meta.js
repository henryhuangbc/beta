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
        content="cubingsoda, programming, code, coding, js, javascript, py, python, react, reactjs"
      />
      <meta
        name="description"
        content="CubingSoda | I showcase my projects and make posts every once in awhile. Reddit, Discord, and GitHub links are at the homepage."
      />

      <meta property="og:image" content="/favicons/icon.png" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="My personal website. I showcase my projects and I make posts every once in awhile"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cubingsoda.pages.dev" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#6eb0ff"
      />
      <meta name="msapplication-TileColor" content="#6eb0ff" />
      <meta name="theme-color" content="#6eb0ff" />

      <title>{title}</title>
    </Head>
  );
}
