import styles from "./priceCard.module.css";
import Button from "../button/Button";

export default function PriceCard({ item, type, onSpotlightClick, selected }) {
  const price =
    type !== "yearly"
      ? item.price.month.toFixed(2)
      : item.price.yearly.toFixed(2);

  const period = type !== "yearly" ? item.period : "per year";

  return (
    <div className={`${styles.container} ${selected ? styles.spotlight : ""}`}>
      <h3 className={styles.title}>{item.type}</h3>
      <p className={styles.desc}>{item.desc}</p>
      <h2 className={styles.price}>{`$ ${price}`}</h2>
      <p className={styles.period}>{period}</p>
      <Button
        to="./"
        bg="black"
        style={{ width: "100%" }}
        id={item.type}
        onClick={onSpotlightClick}
      >
        {item.link}
      </Button>
    </div>
  );
}
