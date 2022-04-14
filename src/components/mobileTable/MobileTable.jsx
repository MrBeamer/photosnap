import styles from "./mobileTable.module.css";
import check from "../../assets/pricing/desktop/check.svg";

export default function MobileTable({ table }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>THE FEATURES</h2>
      </div>
      {table.map((data, index) => {
        return (
          <div key={index} className={styles.wrapper}>
            <h2 className={styles.title}>{data.title}</h2>
            <ul className={styles.list}>
              <li className={styles.item}>
                <p className={styles.text}>Basic</p>
                {data.basic ? (
                  <img className={styles.icon} src={check} alt="check" />
                ) : (
                  ""
                )}
              </li>
              <li className={styles.item}>
                <p className={styles.text}>Pro</p>
                {data.pro ? (
                  <img className={styles.icon} src={check} alt="check" />
                ) : (
                  ""
                )}
              </li>
              <li className={styles.item}>
                <p className={styles.text}>Business</p>
                {data.business ? (
                  <img className={styles.icon} src={check} alt="check" />
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
