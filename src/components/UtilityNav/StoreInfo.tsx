import { IStoreInfo } from "@/api/header/types";

const StoreInfo = ({ store }: { store: IStoreInfo }) => {
  // TODO: Failed state
  if (!store) return null;

  const { name, phone, hours, number } = store;
  return (
    <li className="sw:flex swdc-link">
      <a className="sw:flex sw:gap-2 sw:items-center " href="#">
        <em className="swdc-if swdc-if--store swdc-icon-1"></em>
        <div className="sw:items-start ">
          <span className="sw:whitespace-nowrap ">
            <p className="swdc-typeset-ui-4b">{`${name} #${number}`}</p>
            <p className="swdc-typeset-ui-5 sw:opacity-75">{phone}</p>
            <p className="swdc-typeset-ui-5 sw:opacity-75">{hours}</p>
          </span>
        </div>
      </a>
    </li>
  );
};
export default StoreInfo;
