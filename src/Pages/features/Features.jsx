import FeatureList from "../../components/featureList/FeatureList";
import TopBanner from "../../components/topBanner/TopBanner";
import BottomBanner from "../../components/bottomBanner/BottomBanner";
import { features, banner } from "../../data.js";

export default function Features() {
  return (
    <main>
      <TopBanner banner={banner.features} />
      <FeatureList
        features={features}
        style={{ margin: "160px 0", rowGap: "104px" }}
      />
      <BottomBanner banner={banner.beta} />
    </main>
  );
}
