import styles from "./navList.module.css";
import { NavLink } from "react-router-dom";

export default function NavList({ items, onMobileMenuClick, ...rest }) {
  return (
    <ul className={styles.list} {...rest}>
      {items.map((item, index) => {
        return (
          <li key={index} className={styles.item}>
            <NavLink
              to={item}
              className={styles.link}
              {...rest}
              onClick={onMobileMenuClick}
            >
              {item}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
