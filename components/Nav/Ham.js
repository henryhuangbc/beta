import Link from "next/link";

import { HamburgerSpin } from "react-animated-burgers";
import { useState, useCallback, useEffect, isValidElement } from "react";

import styles from "styles/components/NavBar.module.scss";

export default function Ham() {
  function closeHamNav() {
    setIsActive(false);
  }

  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [isActive]);

  return (
    <div className={styles.ham}>
      <HamburgerSpin buttonColor="#ff000000" {...{ isActive, toggleButton }} />
      <div
        className={`${isActive ? styles.hamShow : styles.hamHide} ${
          styles.hamContent
        }`}
      >
        <section className={styles.links}>
          <div className={styles.homeLink}>
            <Link href="/">
              <a onClick={closeHamNav}>
                <img
                  src="/icon.png"
                  className={styles.heroIcon}
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
