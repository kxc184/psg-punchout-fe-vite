import { ITradingPartnerInfo } from "@/api/header/types";
import TradingPartnerInfoError from "./TradingPartnerInfoError";

export type TTradingPartnerInfo = ITradingPartnerInfo;
const TradingPartnerInfo = ({
  tradingPartner,
}: {
  tradingPartner: TTradingPartnerInfo;
}) => {
  if (!tradingPartner) {
    return <TradingPartnerInfoError />;
  }

  const { name, accountNumber } = tradingPartner;
  return (
    <li className=" sw:flex sw:justify-center sw:p-1 sw:items-center sw:gap-2">
      <em className="swdc-if swdc-if--map-pin "></em>
      <div className=" sw:flex sw:flex-col sw:justify-center sw:items-start">
        <p className="sw:font-bold sw:break-normal swdc-typeset-ui-4b ">
          {name}
        </p>
        <p className=" swdc-typeset-ui-5 sw:opacity-75">
          Account: {accountNumber}
        </p>
      </div>
    </li>
  );
};
export default TradingPartnerInfo;
