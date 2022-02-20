<<<<<<< HEAD
import "styles/theme.scss";
import "styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <div id="app">
      <Component {...pageProps} />
=======
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
>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default MyApp;
>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
