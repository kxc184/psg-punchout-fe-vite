type TNavLinkName =
  | "quickOrder"
  | "myQuotes"
  | "orderHistory"
  | "pickupLocations";
export interface INavLink {
  name: TNavLinkName;
  label: string;
  enabled: boolean;
  href: string;
}
export interface NavLinkProps {
  link: INavLink;
}

const LINK = {
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
  const { icon } = LINK[link.name];
  return (
    <li className="sw:flex sw:items-center ">
      <a
        className="swdc-typeset-ui-3 swdc-link "
        href={link.href}
        aria-label={`Go to ${link.label} page`}
      >
        <em
          className={`swdc-if swdc-if--${icon} sw:text-primary swdc-icon-1`}
        ></em>
        {link.label}
      </a>
    </li>
  );
};

export default NavLink;
