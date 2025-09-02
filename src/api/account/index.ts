import { HCL_ACCOUNT_ENDPOINT } from "../../lib/constants";
import { transformAccountData } from "./transform";

export const fetchAccount = async () => {
  const response = await fetch(HCL_ACCOUNT_ENDPOINT, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch account information");
  }
  const accountData = await response.json();
  return transformAccountData(accountData);
};
