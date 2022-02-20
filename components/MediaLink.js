import styles from "styles/Home.module.scss";

<<<<<<< HEAD
<<<<<<< HEAD
export default function MediaLink({ name, img, href }) {
=======
export default function PersonalLink({ name, img, href }) {
>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
=======
export default function PersonalLink({ name, img, href }) {
>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
  return (
    <a href={href} rel="noreferrer" target="_blank" className={name}>
      <div className={styles.link}>
        <img src={img} alt="logo" className={`${"logo"} ${`${name}-logo`}`} />
        <span className={styles.linkName}>{name}</span>
      </div>
    </a>
  );
}
