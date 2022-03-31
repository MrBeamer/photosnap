import InfoCard from "../../components/infoCard/InfoCard";
import Gallery from "../../components/gallery/Gallery";
import FeatureList from "../../components/featureList/FeatureList";
import { features, images } from "../../data.js";

export default function Home() {
  return (
    <main>
      <InfoCard />
      <Gallery images={images.slice(0, 4)} />
      <FeatureList
        features={features.slice(0, 3)}
        style={{ margin: "120px 165px" }}
      />
    </main>
  );
}
