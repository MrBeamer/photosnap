import HeroBanner from "../../components/heroBanner/HeroBanner";
import Gallery from "../../components/gallery/Gallery";
import { images } from "../../data.js";

export default function Stories() {
  return (
    <main>
      <HeroBanner />
      <Gallery images={images} />
    </main>
  );
}
