import styles from "./infoCard.module.css";
import { home } from "../../data.js";
import Button from "../button/Button";

export default function InfoCard() {
  return home.map((item, index) => {
    return (
      <div className={styles.container} key={index}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentContainer}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.paragraph}>{item.desc}</p>
            {index === 0 ? (
              <Button bg="white" type="arrowWhite" to={item.target}>
                {item.link}
              </Button>
            ) : (
              <Button type="arrowBlack" to={item.target}>
                {item.link}
              </Button>
            )}
          </div>
        </div>
        <div className={styles.imgContainer}>
          <picture>
            <source media="(max-width: 480px)" srcSet={item.img.mobile} />
            <source media="(max-width: 768px)" srcSet={item.img.tablet} />
            <source media="(max-width: 1440px)" srcSet={item.img.desktop} />
            <img src={item.img.mobile} alt="mobile" />
          </picture>
        </div>
      </div>
    );
  });
}
