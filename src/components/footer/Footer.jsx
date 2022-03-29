import styles from "./footer.module.css";
import SocialList from "../socialList/SocialList";
import Logo from "../logo/Logo";
import NavList from "../navList/NavList";
import Button from "../button/Button";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.grid}>
        <Logo color="white" />
        <NavList
          items={["home", "stories", "features", "pricing"]}
          style={{ color: "#fff", flexDirection: "column", rowGap: "19px" }}
        />
        <Button type="arrowWhite" to="/" style={{ justifyContent: "end" }}>
          GET AN INVITE
        </Button>
        <SocialList />
        <p className={styles.copy}>Copyright 2019. All Rights Reserved</p>
      </div>
    </footer>
  );
}
