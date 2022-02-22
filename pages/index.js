import { v4 as uuidv4 } from "uuid";

import UI from "components/UI";

import projects from "lib/projects-list";
import PersonalLink from "components/MediaLink";

import styles from "styles/Home.module.scss";

export default function Home() {
  return (
    <UI>
      <main className={styles.main}>
        <h1 className={styles.hello}>Sup. My name is Henry.</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>Media</h1>

            <PersonalLink
              name="GitHub"
              img="/img/icons/github.png"
              href="https://github.com/henryhuangbc"
            />
            <PersonalLink
              name="Reddit"
              img="/img/icons/reddit.png"
              href="https://www.reddit.com/user/officialdoglover/"
            />
            <PersonalLink
              name="Discord"
              img="/img/icons/discord.png"
              href="https://discord.com/users/1234567890"
            />
          </div>

          <div className={styles.card}>
            <h1 className={styles.cardTitle}>About Me</h1>

            <div className={styles.aboutMe}>
              I do nothing but code and play game all day no stop.
              <br />
              <br />I use Mac, only Mac, and only Mac. Thanks for the concern.
            </div>
          </div>

          <div className={`${styles.card} ${styles.projectsCard}`}>
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
                  <span className={styles.nameAndDate}>
                    <span>{project.name}</span> - <span>{project.date}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </UI>
  );
}
