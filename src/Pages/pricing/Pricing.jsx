import TopBanner from "../../components/topBanner/TopBanner";
import BottomBanner from "../../components/bottomBanner/BottomBanner";
import { pricing, banner, table } from "../../data.js";
import PriceList from "../../components/priceList/PriceList";
import Switch from "../../components/switch/Switch";
import Table from "../../components/table/Table";
import MobileTable from "../../components/mobileTable/MobileTable";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export default function Pricing() {
  const [active, setActive] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 568px)" });

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
      {isMobile ? <MobileTable table={table} /> : <Table table={table} />}
      <BottomBanner banner={banner.beta} />
    </main>
  );
}
