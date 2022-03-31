import TopBanner from "../../components/topBanner/TopBanner";
import BottomBanner from "../../components/bottomBanner/BottomBanner";
import { features, banner } from "../../data.js";

export default function Pricing() {
  return (
    <main>
      <TopBanner banner={banner.pricing} />
      <BottomBanner banner={banner.beta} />
    </main>
  );
}
