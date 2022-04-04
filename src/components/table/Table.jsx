import styles from "./table.module.css";

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
            <td>+</td>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <td>UNLIMITED PHOTO UPLOAD</td>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <td>UNLIMITED PHOTO UPLOAD</td>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <td>UNLIMITED PHOTO UPLOAD</td>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <td>UNLIMITED PHOTO UPLOAD</td>
            <td>+</td>
            <td>+</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
