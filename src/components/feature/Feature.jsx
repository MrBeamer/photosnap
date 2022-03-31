import styles from "./feature.module.css";

export default function Feature({ feature }) {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={feature.icon} alt="icon" />
      <h2 className={styles.title}>{feature.title}</h2>
      <p className={styles.description}>{feature.desc}</p>
    </div>
  );
}
