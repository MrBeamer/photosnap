import moonD from "../../assets/stories/desktop/moon-of-appalacia.jpg";
import moonT from "../../assets/stories/tablet/moon-of-appalacia.jpg";
import moonM from "../../assets/stories/desktop/moon-of-appalacia.jpg";
import styles from "./heroBanner.module.css";
import Button from "../button/Button";

export default function HeroBanner() {
  return (
    <div className={styles.container}>
      <picture>
        <source media="(max-width: 480px)" srcSet={moonM} />
        <source media="(max-width: 768px)" srcSet={moonT} />
        <source media="(max-width: 1440px)" srcSet={moonD} />
        <img className={styles.img} src={moonM} alt="mobile" />
      </picture>
      <div className={styles.content}>
        <p className={styles.featured}>LAST MONTH’S FEATURED STORY</p>
        <h2 className={styles.title}>HAZY FULL MOON OF APPALACHIA</h2>
        <p className={styles.date}>
          March 2nd 2020 <span>by John Appleseed</span>
        </p>
        <p className={styles.paragraph}>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <Button type="arrowWhite" to={"/"}>
          READ THE STORY
        </Button>
      </div>
    </div>
  );
}
