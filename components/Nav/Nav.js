import styles from "styles/components/NavBar.module.scss";

import Link from "next/link";

export default function RegularNav() {
  return (
    <div className={styles.regular}>
      <Link href="/">
        <a>
          <img
            src="/favicons/icon.png"
            className={styles.heroIcon}
            alt="Site Icon"
            draggable="false"
          />
        </a>
      </Link>

      <section className={styles.links}>
        <Link href="/">
          <a>CubingSoda</a>
        </Link>

        <Link href="/projects">
          <a>Projects</a>
        </Link>

        <Link href="/posts">
          <a>Posts</a>
        </Link>

        <a
          href="https://github.com/CubingSoda/personal-website"
          target="_blank"
          rel="noreferrer"
          className={styles.repoLink}
        >
          <img src="/img/icons/github.png" alt="Github Icon" />
          <span>Source Code</span>
        </a>
      </section>
    </div>
  );
}
