import styles from "styles/Home.module.scss";

export default function PersonalLink({ name, img, href }) {
  return (
    <a href={href} rel="noreferrer" target="_blank" className={name}>
      <div className={styles.link}>
        <img
          src={img}
          alt="logo"
          className={`${styles.logo} ${`${name}-logo`}`}
        />
        <span className={styles.linkName}>{name}</span>
      </div>
    </a>
  );
}
