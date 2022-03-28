import styles from "./gallery.module.css";
import { gallery } from "../../data.js";
import Button from "../button/Button";

export default function Gallery() {
  return (
    <div className={styles.grid}>
      {gallery.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundImage: `url(${item.img.desktop})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <p className={styles.date}>{item.date}</p>
            <h2 className="headline--medium">{item.title}</h2>
            <p className={styles.author}>{item.author}</p>
            <Button to={item.target}>{item.link}</Button>
          </div>
        );
      })}
    </div>
  );
}

/* //maybe use background instead of image */
{
  /* <picture>
<source media="(max-width: 480px)" srcSet={item.img.mobile} />
<source media="(max-width: 768px)" srcSet={item.img.tablet} />
<source media="(max-width: 1440px)" srcSet={item.img.desktop} />
<img src={item.img.mobile} alt="mobile" />
</picture> */
}
