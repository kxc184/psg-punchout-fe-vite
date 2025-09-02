export interface IStoreInfo {
  name: string;
  phone: string;
  hours: string;
}
const StoreInfo = ({ name, phone, hours }: IStoreInfo) => (
  <li className="sw:flex ">
    <a className="sw:flex sw:gap-2 sw:items-center" href="#">
      <em className="swdc-if swdc-if--store "></em>
      <div className="sw:items-start ">
        <span className="sw:whitespace-nowrap ">
          <p className="swdc-typeset-ui-4b">{name}</p>
          <p className="sw:outline-[#999] swdc-typeset-ui-5 sw:opacity-75">
            {phone}
          </p>
          <p className="swdc-typeset-ui-5 sw:opacity-75">{hours}</p>
        </span>
      </div>
    </a>
  </li>
);
export default StoreInfo;
