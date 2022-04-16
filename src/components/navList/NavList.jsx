import styles from "./navList.module.css";
import { NavLink } from "react-router-dom";

export default function NavList({ items, onMobileMenuClick, ...rest }) {
  let activeStyle = {
    opacity: "0.3",
  };

  return (
    <ul className={styles.list} {...rest}>
      {items.map((item, index) => {
        return (
          <li key={index} className={styles.item}>
            <NavLink
              to={`/${item}`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              aria-label="Find out more about..."
              title="Find out more about..."
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
