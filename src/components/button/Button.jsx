import styles from "./button.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import arrow from "../../assets/shared/desktop/arrow.svg";

export default function Button({ to, type, bg, children, ...rest }) {
  const classNames = clsx({
    [styles.btn]: true,
    [styles.black]: bg === "black",
    [styles.white]: bg === "white",
    [styles.arrowBlack]: type === "arrowBlack",
    [styles.arrowWhite]: type === "arrowWhite",
  });

  return (
    <Link to={to} className={classNames} {...rest}>
      {children}
      {type && <img className={styles.icon} src={arrow} alt="arrow right" />}
    </Link>
  );
}
