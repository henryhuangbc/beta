<<<<<<< HEAD
import UI from "components/UI";
=======
import Meta from "components/Meta";
>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6

import styles from "styles/NotFound.module.scss";

export default function NotFound() {
  return (
<<<<<<< HEAD
    <UI page="404">
=======
    <>
      <Meta page="404" />

>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
      <main className={styles.notFound}>
        <div className={styles.title}>404</div>
        <div className={styles.paragraph}>
          Sorry, we couldn&apos;t find what you were looking for.
        </div>
      </main>
<<<<<<< HEAD
    </UI>
=======
    </>
>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
  );
}
