import styles from "./header.module.css";

export default function Header({ children }) {
  return <header className={styles.container}>{children}</header>;
}
