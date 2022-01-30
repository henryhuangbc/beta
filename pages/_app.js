import Meta from "components/Meta";

import Nav from "components/Nav";
import Footer from "components/Footer";

import "styles/theme.scss";
import "styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div id="app">
      <Nav />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
