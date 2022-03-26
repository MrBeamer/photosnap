import styles from "./navList.module.css";
import { NavLink } from "react-router-dom";

export default function NavList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => {
        return (
          <li key={index} className={styles.item}>
            <NavLink to={item} className={styles.link}>
              {item}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
