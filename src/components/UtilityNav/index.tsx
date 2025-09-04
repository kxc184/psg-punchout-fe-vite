import React from "react";
import AccountInfo from "./AccountInfo";
import StoreInfo from "./StoreInfo";
import UtilityNavLink from "./UtilityNavLink";

const UtilityNav = () => {
  const store = {
    name: "POULSBO #701856",
    phone: "(745) 202-1274",
    hours: "7:00 AM - 5:00 PM",
  };
  const quickOrderUrl = "/#";
  const orderHistoryUrl = "/#";
  const locationSelectionUrl = "/#";
  const cmcLinks = [
    quickOrderUrl && (
      <UtilityNavLink
        key="quickOrder"
        icon="notepad"
        href={quickOrderUrl}
        ariaLabel="Go to Quick Order page"
      >
        Quick Order
      </UtilityNavLink>
    ),
    orderHistoryUrl && (
      <UtilityNavLink
        key="orderHistory"
        icon="clock"
        href={orderHistoryUrl}
        ariaLabel="View your order history"
      >
        Order History
      </UtilityNavLink>
    ),
  ]
    // Removes all nullish values from list then maps through and adds dividers for utility nav
    .filter(Boolean)
    .map((link, idx, arr) => (
      <React.Fragment key={idx}>
        {link}
        {idx < arr.length - 1 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1"
            height="56"
            viewBox="0 0 1 56"
            fill="none"
            style={{ alignSelf: "center" }}
          >
            <g opacity="0.25">
              <line x1="0.5" y1="56" x2="0.5" y2="0" stroke="#2F2F30" />
            </g>
          </svg>
        )}
      </React.Fragment>
    ));

  return (
    <nav
      className="sw:hidden sw:md:flex sw:container sw:min-w-[990px] sw:max-w-[1440px] sw:bg-white sw:px-8 sw:mx-auto sw:text-primary  sw:justify-between"
      aria-label="Desktop utility navigation"
    >
      <div className="sw:flex sw:justify-center sw:items-center sw:gap-4">
        <AccountInfo />
        <StoreInfo name={store.name} phone={store.phone} hours={store.hours} />
      </div>
      <ul className="sw:flex sw:items-center sw:py-1 sw:gap-2">
        {cmcLinks}
        {locationSelectionUrl && (
          <li
            key="location"
            className="sw:flex sw:items-center sw:justify-center"
          >
            <a
              href={locationSelectionUrl}
              className="sw:flex sw:justify-center sw:items-center swdc-button swdc-button--outlined swdc-button--sm"
              aria-label="Back to location selection"
            >
              <em className="swdc-if swdc-if--caret-left" aria-hidden="true" />
              location selection
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default UtilityNav;
