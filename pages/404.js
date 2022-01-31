import Meta from "components/Meta";

import styles from "styles/NotFound.module.scss";

export default function NotFound() {
  return (
    <>
      <Meta page="404" />

      <main className={styles.notFound}>
        <div className={styles.title}>404</div>
        <div className={styles.paragraph}>
          Sorry, we couldn&apos;t find what you were looking for.
        </div>
      </main>
    </>
  );
}
