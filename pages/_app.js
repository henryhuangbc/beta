import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div id="app">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
