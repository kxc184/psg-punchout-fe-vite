import { HCL_ACCOUNT_ENDPOINT } from "../../lib/constants";
import { HttpError } from "../HttpError";
import { transformAccountData } from "./transform";

export const fetchAccount = async () => {
  const res = await fetch(HCL_ACCOUNT_ENDPOINT, {
    credentials: "include",
  });
  if (!res.ok) {
    throw new HttpError("Failed to fetch account information", res.status);
  }
  const accountData = await res.json();
  return transformAccountData(accountData);
};
