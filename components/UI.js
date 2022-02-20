import Meta from "components/Meta";

import Nav from "components/Nav";
import Footer from "components/Footer";

export default function UI({ children, page, desc }) {
  return (
    <>
      <Meta page={page} desc={desc} />

      <Nav />
      {children}
      <Footer />
    </>
  );
}
