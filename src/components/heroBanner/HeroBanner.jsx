import styles from "./heroBanner.module.css";
import Button from "../button/Button";

export default function HeroBanner({ background }) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.27%, rgba(0, 0, 0, 0.661222) 100%),
          url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
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
// render component 3 times in stories with different screen sizes
