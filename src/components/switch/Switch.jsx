import styles from "./switch.module.css";

export default function Switch({ onSwitchClick, active }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Monthly</h2>
      <div
        className={`${styles.wrapper} ${active && styles.active}`}
        onClick={onSwitchClick}
      >
        <div className={`${styles.circle} ${active && styles.active}`}></div>
      </div>
      <h2 className={styles.title}>Yearly</h2>
    </div>
  );
}
