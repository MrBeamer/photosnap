import styles from "./gallery.module.css";
import { gallery } from "../../data.js";
import Button from "../button/Button";

export default function Gallery() {
  return (
    <div className={styles.grid}>
      <div
        className={styles.background}
        styles={{ backgroundImage: `url(${gallery.img})` }}
      >
        <p className={styles.date}>{gallery.date}</p>
        <h2 className="headline--medium">{gallery.title}</h2>
        <p className={styles.author}>{gallery.author}</p>
        <Button to={gallery.target}>{gallery.link}</Button>
      </div>
      {/* <img src={gallery.img} alt={gallery.title}></img> */}
    </div>
  );
}

//maybe use background instead of image
