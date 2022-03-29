import styles from "./featureList.module.css";
import Feature from "../feature/Feature";
import { features } from "../../data.js";

export default function FeatureList({ ...rest }) {
  return (
    <div className={styles.container} {...rest}>
      <Feature features={features.slice(0, 3)} />
    </div>
  );
}
