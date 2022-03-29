import styles from "./feature.module.css";

export default function Feature({ features }) {
  return features.map((item, index) => {
    return (
      <div key={index} className={styles.container}>
        <img className={styles.icon} src={item.icon} alt="icon" />
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.description}>{item.desc}</p>
      </div>
    );
  });
}
