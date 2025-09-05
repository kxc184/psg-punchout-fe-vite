import { NavLinkProps } from "../../api/header/types";

const LINK_ICON: Record<string, { icon: string }> = {
  quickOrder: {
    icon: "notepad",
  },
  myQuotes: {
    icon: "cardholder",
  },
  orderHistory: {
    icon: "clock",
  },
  pickupLocations: {
    icon: "globe",
  },
};

const NavLink = ({ link }: NavLinkProps) => {
  const icon = LINK_ICON[link.name]?.icon;
  return (
    <li className="sw:flex sw:items-center ">
      <a
        className="swdc-typeset-ui-3 swdc-link "
        href={link.href}
        aria-label={`Go to ${link.label} page`}
      >
        {icon && (
          <em
            className={`swdc-if swdc-if--${icon} sw:text-primary swdc-icon-1`}
          ></em>
        )}
        {link.label}
      </a>
    </li>
  );
};

export default NavLink;
