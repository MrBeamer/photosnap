import InfoCard from "../../components/infoCard/InfoCard";
import Gallery from "../../components/gallery/Gallery";
import FeatureList from "../../components/featureList/FeatureList";

export default function Home() {
  return (
    <main>
      <InfoCard />
      <Gallery />
      <FeatureList style={{ margin: "120px 165px" }} />
    </main>
  );
}
