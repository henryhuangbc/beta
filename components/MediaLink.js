import styles from "styles/Home.module.scss";

export default function MediaLink({ name, img, href }) {
  return (
    <a href={href} rel="noreferrer" target="_blank" className={name}>
      <div className={styles.link}>
        <img src={img} alt="logo" className={`${"logo"} ${`${name}-logo`}`} />
        <span className={styles.linkName}>{name}</span>
      </div>
    </a>
  );
}
