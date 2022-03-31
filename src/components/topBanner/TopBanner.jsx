import styles from "./topBanner.module.css";

export default function TopBanner({ banner }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{banner.title}</h2>
          <p className={styles.desc}>{banner.desc}</p>
        </div>
      </div>
      <div className={styles.frame}>
        <img
          className={styles.img}
          src={banner.img}
          alt="Man holding camera"
        ></img>
      </div>
    </div>
  );
}
