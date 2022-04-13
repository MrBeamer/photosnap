import HeroBanner from "../../components/heroBanner/HeroBanner";
import Gallery from "../../components/gallery/Gallery";
import { images } from "../../data.js";
import { useMediaQuery } from "react-responsive";

import moonD from "../../assets/stories/desktop/moon-of-appalacia.jpg";
import moonT from "../../assets/stories/tablet/moon-of-appalacia.jpg";
import moonM from "../../assets/stories/desktop/moon-of-appalacia.jpg";

export default function Stories() {
  const isTablet = useMediaQuery({ query: "(max-width: 769px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <main>
      {!isMobile && !isTablet && <HeroBanner background={moonD} />}
      {isTablet && <HeroBanner background={moonT} />}
      {isMobile && !isTablet && <HeroBanner background={moonM} />}
      <Gallery images={images} />
    </main>
  );
}
