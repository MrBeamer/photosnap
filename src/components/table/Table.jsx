import styles from "./table.module.css";
import check from "../../assets/pricing/desktop/check.svg";

export default function Table({ table }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Compare</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>THE FEATURES</th>
            <th>BASIC</th>
            <th>PRO</th>
            <th>Business</th>
          </tr>
        </thead>
        <tbody>
          {table.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.title}</td>
                <td>
                  {data.basic ? (
                    <img className={styles.icon} src={check} alt="check" />
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {data.pro ? (
                    <img className={styles.icon} src={check} alt="check" />
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {data.business ? (
                    <img className={styles.icon} src={check} alt="check" />
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
