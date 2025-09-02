import { HCL_CONTEXT_ENDPOINT as HCL_CONTEXT_ENDPOINT } from "../../lib/constants";
import { HttpError } from "../HttpError";
import { transformWcsCtx } from "./transform";

export interface IWcsCtx {
  organizationId: string;
  contractId: string;
}

export const fetchWcsCtx = async () => {
  const response = await fetch(HCL_CONTEXT_ENDPOINT, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new HttpError("failed to fetch WCS context", response.status);
  }
  return transformWcsCtx(await response.text());
};
