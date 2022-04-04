import styles from "./priceCard.module.css";
import Button from "../button/Button";

export default function PriceCard({ item, type }) {
  const price =
    type !== "yearly"
      ? item.price.month.toFixed(2)
      : item.price.yearly.toFixed(2);

  const period = type !== "yearly" ? item.period : "per year";

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{item.type}</h2>
      <p className={styles.desc}>{item.desc}</p>
      <p className={styles.price}>{`$ ${price}`}</p>
      <p className={styles.period}>{period}</p>
      <Button to="./" bg="black" style={{ width: "100%" }}>
        {item.link}
      </Button>
    </div>
  );
}
