import styles from "./socialList.module.css";
import fb from "../../assets/shared/desktop/facebook.svg";
import ins from "../../assets/shared/desktop/instagram.svg";
import pin from "../../assets/shared/desktop/pinterest.svg";
import tw from "../../assets/shared/desktop/twitter.svg";
import tube from "../../assets/shared/desktop/youtube.svg";
import { Link } from "react-router-dom";

export default function SocialList() {
  const icons = [
    { img: fb, alt: "Facebook" },
    { img: ins, alt: "Instagram" },
    { img: pin, alt: "Pinterest" },
    { img: tw, alt: "Twitter" },
    { img: tube, alt: "Youtube" },
  ];

  return (
    <ul className={styles.list}>
      {icons.map((icon) => {
        return (
          <li key={icon.alt}>
            <Link to="/">
              <img className={styles.icon} src={icon.img} alt={icon.alt} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
