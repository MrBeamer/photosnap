import styles from "./logo.module.css";
import logo from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img className={styles.logo} src={logo} alt="Logo"></img>
    </Link>
  );
}
