export interface IUtilityNavLink {
  icon?: string;
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}
const UtilityNavLink = ({
  icon,
  href,
  ariaLabel,
  children,
}: IUtilityNavLink) => (
  <li className="sw:flex sw:items-center sw:gap-1 swdc-typeset-ui-3 sw:px-2">
    <em
      className={`swdc-if ${icon ? `swdc-if--${icon} sw:text-primary` : ""} `}
    ></em>
    <a href={href} aria-label={ariaLabel}>
      {children}
    </a>
  </li>
);
export default UtilityNavLink;
