import styles from "./navbar.module.css";
import Logo from "../logo/Logo";
import NavList from "../navList/NavList";
import Button from "../button/Button";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <NavList items={["stories", "features", "pricing"]} />
      <Button bg="black" to="/">
        get and invite
      </Button>
    </nav>
  );
}
