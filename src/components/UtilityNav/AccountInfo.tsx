import { useAccount } from "../../api/account/useAccount";

export interface IAccountInfo {
  orgEntityDisplayName: string;
  accountNumber: string;
}
export type TAccountInfo = IAccountInfo | undefined;
const AccountInfo = () => {
  const { data: account } = useAccount();

  const { orgEntityDisplayName, accountNumber } = account || {
    orgEntityDisplayName: "Not Found",
    accountNumber: "Invalid",
  };
  // TODO: Error State
  return (
    <li className="sw:flex sw:justify-center sw:items-center sw:max-w-[300px] sw:gap-2">
      <em className="swdc-if swdc-if--map-pin" />
      <div className="sw:flex sw:flex-col sw:justify-center sw:items-start">
        <p className="sw:font-bold sw:break-normal swdc-typeset-ui-4b">
          {orgEntityDisplayName}
        </p>
        <p className="swdc-typeset-ui-5 sw:opacity-75">
          Account: {accountNumber}
        </p>
      </div>
    </li>
  );
};
export default AccountInfo;
