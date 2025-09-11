import { IStoreInfo } from "@/api/header/types";
import StoreInfoError from "./StoreInfoError";

const StoreInfo = ({ store }: { store: IStoreInfo }) => {
  if (!store) {
    return <StoreInfoError />;
  }

  const { name, phone, openHours, number } = store;
  return (
    <li className="sw:flex  sw:rounded sw:p-1">
      <a className="sw:flex sw:gap-2 sw:items-center " href="#">
        <em className="swdc-if swdc-if--store swdc-icon-1 "></em>
        <div className="sw:items-start ">
          <span className="sw:whitespace-nowrap ">
            <p className="swdc-typeset-ui-4b">{`${name} #${number}`}</p>
            <p className="swdc-typeset-ui-5 sw:opacity-75">{phone}</p>
            <p className="swdc-typeset-ui-5 sw:opacity-75">{openHours}</p>
          </span>
        </div>
      </a>
    </li>
  );
};
export default StoreInfo;
