import styles from "./button.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Button({ style, bg, text }) {
  const classNames = clsx({
    [styles.btn]: true,
    [styles.black]: bg === "black",
    [styles.white]: bg === "white",
    [styles.arrowBlack]: style === "arrowBlack",
    [styles.arrowWhite]: style === "arrowWhite",
  });

  return (
    <Link to={"/"} className={classNames}>
      {text}
    </Link>
  );
}
