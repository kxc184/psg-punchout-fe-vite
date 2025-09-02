import { IAccountInfo } from "@/components/UtilityNav/AccountInfo";

export const transformAccountData = (data: IAccountInfo) => {
  // Reformat account number to XXX-XXXX-XXX
  const raw = data.accountNumber?.replace(/\D/g, "") ?? "";
  const formatted =
    raw.length === 9
      ? `${raw.slice(0, 4)}-${raw.slice(4, 8)}-${raw.slice(8)}`
      : data.accountNumber;
  return {
    orgEntityDisplayName: data.orgEntityDisplayName,
    accountNumber: formatted,
  };
};
