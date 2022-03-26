import styles from "./logo.module.css";
import logo from "../../assets/shared/desktop/logo.svg";

export default function Logo() {
  return <img className={styles.logo} src={logo} alt="Logo"></img>;
}
