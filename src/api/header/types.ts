import { INavLink } from "@/components/UtilityNav/NavLink";

export interface ITradingPartnerInfo {
  name: string;
  accountNumber: string;
}
export interface IStoreInfo {
  name: string;
  phone: string;
  hours: string;
  number: string;
}
export interface ISuccessfulHeaderResponseApi {
  tradingPartner: ITradingPartnerInfo;
  store: IStoreInfo;
  links: INavLink[];
  cart: {
    quantity: string;
    totalPrice: string;
  };
}
