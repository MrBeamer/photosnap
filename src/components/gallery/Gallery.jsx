import styles from "./gallery.module.css";
import Button from "../button/Button";

export default function Gallery({ images }) {
  return (
    <div className={styles.grid}>
      {images.map((item, index) => {
        return (
          <div
            className={styles.background}
            key={index}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.27%, rgba(0, 0, 0, 0.661222) 100%),
              url(${item.img.desktop})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className={styles.content}>
              <p className={styles.date}>{item.date}</p>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.author}>{item.author}</p>
              <div className={styles.line}></div>
              <Button
                style={{ justifyContent: "space-between" }}
                type="arrowWhite"
                to={item.target}
              >
                {item.link}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
