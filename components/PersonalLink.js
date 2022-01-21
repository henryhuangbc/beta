import Link from "next/link";
import styles from "styles/Home.module.css";

export default function PersonalLink({ name, img, href }) {
  return (
    <Link href={href}>
      <a>
        <div className={styles.link}>
          <img src={img} alt="logo" className={styles.logo} />
          <span className={styles.linkName}>{name}</span>
        </div>
      </a>
    </Link>
  );
}
