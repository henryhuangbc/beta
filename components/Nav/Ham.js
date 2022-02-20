import Link from "next/link";

import { useState, useCallback, useEffect, isValidElement } from "react";

import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";

import styles from "styles/components/NavBar.module.scss";

export default function Ham() {
  const [hamOpen, setHamOpen] = useState(false);

  function closeHamNav() {
    setHamOpen(false);
  }

  useEffect(() => {
    if (hamOpen) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [hamOpen]);

  return (
    <div className={styles.ham}>
      <div
        onClick={() => {
          setHamOpen(!hamOpen);
        }}
      >
        <Burger isOpen={hamOpen} />
      </div>

      <div
        className={`${hamOpen ? styles.hamShow : styles.hamHide} ${
          styles.hamContent
        }`}
      >
        <section className={styles.links}>
          <div className={styles.homeLink}>
            <Link href="/">
              <a onClick={closeHamNav}>
                <img
                  src="/favicons/icon.png"
                  className={styles.heroIcon}
                  alt="Site Icon"
                  draggable="false"
                />
                CubingSoda
              </a>
            </Link>
          </div>

          <div className={styles.otherLinks}>
            <Link href="/projects">
              <a onClick={closeHamNav}>Projects</a>
            </Link>

            <Link href="/posts">
              <a onClick={closeHamNav}>Posts</a>
            </Link>

            <a
              onClick={closeHamNav}
              href="https://github.com/CubingSoda/personal-website"
              target="_blank"
              rel="noreferrer"
              className={styles.repoLink}
            >
              <img src="/img/icons/github.png" alt="Github Icon" />
              <span>Source Code</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
