import styles from "styles/components/NavBar.module.scss";

import RegularNav from "./Nav";
import Ham from "./Ham";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <RegularNav />
      <Ham />
    </nav>
  );
}
