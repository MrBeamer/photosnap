import TopBanner from "../../components/topBanner/TopBanner";
import BottomBanner from "../../components/bottomBanner/BottomBanner";
import { pricing, banner } from "../../data.js";
import PriceList from "../../components/priceList/PriceList";
import Switch from "../../components/switch/Switch";
import Table from "../../components/table/Table";
import { useState } from "react";

export default function Pricing() {
  const [active, setActive] = useState(false);

  function handleSwitchClick() {
    setActive((prevState) => !prevState);
  }

  return (
    <main>
      <TopBanner banner={banner.pricing} />
      <Switch onSwitchClick={handleSwitchClick} active={active} />

      {active ? (
        <PriceList pricing={pricing} type="yearly" />
      ) : (
        <PriceList pricing={pricing} />
      )}
      <Table />
      <BottomBanner banner={banner.beta} />
    </main>
  );
}
