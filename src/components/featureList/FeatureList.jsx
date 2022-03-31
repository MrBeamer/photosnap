import styles from "./featureList.module.css";
import Feature from "../feature/Feature";

export default function FeatureList({ features, ...rest }) {
  return (
    <div className={styles.container} {...rest}>
      {features.map((feature, index) => {
        return <Feature key={index} feature={feature} />;
      })}
    </div>
  );
}
