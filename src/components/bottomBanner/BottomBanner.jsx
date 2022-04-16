import styles from "./bottomBanner.module.css";
import Button from "../button/Button";

export default function BottomBanner({ banner }) {
  return (
    <div
      style={{
        backgroundImage: `url(${banner.img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <h2 className={`${styles.title} headline--big`}>{banner.title}</h2>
        <Button type="arrowWhite" to={banner.target} style={{ width: "166px" }}>
          {banner.link}
        </Button>
      </div>
    </div>
  );
}
