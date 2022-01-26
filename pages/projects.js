import Meta from "components/Meta";
import Nav from "components/Nav";
import Footer from "components/Footer";

import projects from "lib/projectsList";

import styles from "styles/Projects.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

export default function Projects() {
  return (
    <>
      <Meta page="Projects" />
      <Nav />

      <div className={styles.projects}>
        {projects.map((project) => {
          return (
            <div className={styles.project} key={uuidv4()}>
              <img
                src={project.img}
                className={`${styles.projectImg} ${`${project.cleanName}-img`}`}
                alt="Project Image"
                width={project.imgDimensions[0]}
                height={project.imgDimensions[1]}
              />

              <div>
                <div className={styles.projectTitle}>
                  {project.name} - {project.date}
                </div>

                <div className={styles.desc}>{project.desc}</div>

                <div className={styles.links}>
                  <a href={project.sourceCode} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faCode} /> Source Code
                  </a>

                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Link
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
