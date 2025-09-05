import React from "react";
import TradingPartnerInfo from "./TradingPartnerInfo";
import StoreInfo from "./StoreInfo";
import NavLink from "./NavLink";
import Divider from "./Divider";
import { useHeaderApi } from "../../api/header/useHeaderApi";
import { INavLink } from "@/api/header/types";

const UtilityNav = () => {
  // TODO: Fix error states
  const { data, isLoading, error } = useHeaderApi();
  if (isLoading) return <div className="sw:min-h-[80px] ">Loading...</div>;
  if (error) return <div className="sw:min-h-[80px] ">Error...</div>;
  // if (error) throw new Error("Error loading header data");

  const { tradingPartner, store, links, locationSelectionLink } = data!;
  const cmcLinks = links
    .filter((link) => link.enabled)
    .map((link, i, links) => (
      <React.Fragment key={link.name}>
        <NavLink link={link as INavLink} />
        {/* DO not render last link's divider */}
        {i < links.length - 1 && <Divider />}
      </React.Fragment>
    ));

  return (
    <nav
      className="sw:container sw:min-h-[80px] sw:min-w-[1090px] sw:max-w-[1440px] sw:bg-white sw:px-8 sw:mx-auto sw:text-primary sw:flex sw:justify-between"
      aria-label="Desktop utility navigation"
    >
      <ul className="sw:flex sw:justify-center sw:items-center sw:gap-4">
        <TradingPartnerInfo tradingPartner={tradingPartner} />
        <StoreInfo store={store} />
      </ul>
      <div className="sw:flex">
        <ul className="sw:flex sw:items-center  sw:py-1 sw:gap-1">
          {cmcLinks}
        </ul>
        {locationSelectionLink?.enabled && (
          <a
            href={locationSelectionLink?.href}
            className="sw:flex sw:ml-2 sw:justify-center sw:items-center sw:self-center swdc-button swdc-button--outlined swdc-button--sm swdc-typeset-button-3"
            aria-label="Back to location selection"
          >
            <em className="swdc-if swdc-if--caret-left" aria-hidden="true" />
            Location Selection
          </a>
        )}
      </div>
    </nav>
  );
};

export default UtilityNav;
