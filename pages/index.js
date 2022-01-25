import styles from "styles/Home.module.scss";
import Meta from "components/Meta";
import Nav from "components/Nav";
import Footer from "components/Footer";
import PersonalLink from "components/PersonalLink";

import Typewriter from "typewriter-effect";
import projects from "lib/projectsList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  return (
    <>
      <Meta />
      <Nav />

      <main className={styles.main}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(80)
              .typeString("Hi, I am a React.js Developer.")

              .callFunction(() => {
                console.log("String typed out");
              })
              .start();
          }}
        />
        <div className={styles.cards}>
          <div className={`${styles.card}`}>
            <h1 className={styles.cardTitle}>Media</h1>

            <PersonalLink
              name="GitHub"
              img="/img/icons/github.png"
              href="https://github.com/CubingSoda"
            />
            <PersonalLink
              name="Reddit"
              img="/img/icons/reddit.png"
              href="https://www.reddit.com/user/CubingSoda/"
            />
            <PersonalLink
              name="Discord"
              img="/img/icons/discord.png"
              href="https://discord.com/users/822191907286417450"
            />
          </div>

          <div className={`${styles.card}`}>
            <h1 className={styles.cardTitle}>Projects</h1>
            {projects.slice(0, 4).map((project) => {
              return (
                <a
                  className={styles.projectLink}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  key={uuidv4()}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  <span>
                    <span>{project.name}</span> - <span>{project.date}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
