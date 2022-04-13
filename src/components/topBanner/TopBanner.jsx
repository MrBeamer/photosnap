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
        <picture>
          <source media="(max-width: 569px)" srcSet={banner.img.mobile} />
          <source media="(max-width: 865px)" srcSet={banner.img.tablet} />
          <source media="(max-width: 1440px)" srcSet={banner.img.desktop} />
          <img className={styles.img} src={banner.img.desktop} alt="banner" />
        </picture>
      </div>
    </div>
  );
}
