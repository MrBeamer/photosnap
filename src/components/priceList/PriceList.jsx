import styles from "./priceList.module.css";
import PriceCard from "../priceCard/PriceCard";
import { useState } from "react";

export default function PriceList({ pricing, type }) {
  const [selectedIndex, setSelectedIndex] = useState(1);

  function handleSpotlightClick(index) {
    setSelectedIndex(index);
    console.log(index);
  }

  console.log(selectedIndex);

  return (
    <div className={styles.container}>
      {pricing.map((item, index) => {
        return (
          <PriceCard
            key={index}
            item={item}
            type={type}
            onSpotlightClick={() => handleSpotlightClick(index)}
            selected={index === selectedIndex}
          />
        );
      })}
    </div>
  );
}
