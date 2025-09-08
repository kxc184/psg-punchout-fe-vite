type TNavLinkName =
  | "quickOrder"
  | "myQuotes"
  | "orderHistory"
  | "pickupLocations"
  | "backToLocationSelection";

export interface INavLink {
  name: TNavLinkName;
  label: string;
  enabled: boolean;
  href: string;
}
export interface NavLinkProps {
  link: INavLink;
}
export interface ITradingPartnerInfo {
  name: string;
  accountNumber: string;
}
export interface IStoreInfo {
  address: string;
  city: string;
  zip: string;
  state: string;
  country: string;
  number: string;
  phone: string;
  name: string;
  openHours: string;
}
export interface ISuccessfulHeaderResponseApi {
  tradingPartner: ITradingPartnerInfo;
  store: IStoreInfo;
  links: INavLink[];
}
export interface ITransformedSuccessfulHeaderResponseApi {
  tradingPartner: ITradingPartnerInfo;
  store: IStoreInfo;
  links: INavLink[];
  locationSelectionLink?: INavLink;
}
