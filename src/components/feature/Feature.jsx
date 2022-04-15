import styles from "./feature.module.css";

export default function Feature({ feature }) {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <img src={feature.icon} alt="icon" />
      </div>
      <h2 className={styles.title}>{feature.title}</h2>
      <p className={styles.description}>{feature.desc}</p>
    </div>
  );
}
