import styles from "./priceList.module.css";
import PriceCard from "../priceCard/PriceCard";

export default function PriceList({ pricing, type }) {
  return (
    <div className={styles.container}>
      {pricing.map((item, index) => {
        return <PriceCard key={index} item={item} type={type} />;
      })}
    </div>
  );
}
