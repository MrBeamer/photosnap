import styles from "./table.module.css";
import check from "../../assets/pricing/desktop/check.svg";

export default function Table() {
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
          <tr>
            <td>UNLIMITED STORY POSTING</td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
          </tr>
          <tr>
            <td>UNLIMITED PHOTO UPLOAD</td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
          </tr>
          <tr>
            <td>EMBEDDING CONTENT</td>
            <td></td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
          </tr>
          <tr>
            <td>CUSTOMIZE METADATA</td>
            <td></td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
          </tr>
          <tr>
            <td>ADVANCED METRICS</td>
            <td></td>
            <td></td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
          </tr>
          <tr>
            <td>PHOTO DOWNLOADS</td>
            <td></td>
            <td></td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
          </tr>
          <tr>
            <td>SEARCH ENGINE INDEXING</td>
            <td></td>
            <td></td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
          </tr>
          <tr>
            <td>CUSTOM ANALYTICS</td>
            <td></td>
            <td></td>
            <td>
              <img className={styles.icon} src={check} alt="check" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
