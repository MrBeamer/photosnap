import styles from "./navbar.module.css";
import Logo from "../logo/Logo";
import NavList from "../navList/NavList";
import Button from "../button/Button";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 729px)" });

  function handleMobileMenuClick() {
    setActive((prevState) => !prevState);
    console.log(active);
  }

  return (
    <>
      {!isMobile && (
        <nav className={styles.nav}>
          <Logo />
          <NavList items={["stories", "features", "pricing"]} />
          <Button bg="black" to="/">
            get and invite
          </Button>
        </nav>
      )}
      {isMobile && (
        <nav className={styles.nav}>
          <Logo />
          <div className={styles.hamburger} onClick={handleMobileMenuClick}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
          <div className={`${styles.mobileNav} ${active && styles.active}`}>
            <NavList
              items={["stories", "features", "pricing"]}
              style={{
                flexDirection: "column",
                rowGap: "20px",
                margin: "32px 0 20px 0",
              }}
            />
            <div className={styles.separator}></div>
            <Button to="./" bg="black" style={{ width: "100%" }}>
              GET AN INVITE
            </Button>
          </div>
        </nav>
      )}
    </>
  );
}
