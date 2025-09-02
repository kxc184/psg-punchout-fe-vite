import { transformMegaMenu } from "./transform";
import { PROXY_SEARCH_ENDPOINT } from "../../lib/constants";

export interface IGeneralCategory {
  name: string;
  uniqueID: string;
  href?: string;
  categories: IGeneralCategory[];
}
export type MegaMenuApiResponse = IGeneralCategory[];

export const fetchMegaMenu = async ({
  contractId,
}: {
  contractId: string;
}): Promise<MegaMenuApiResponse> => {
  const res = await fetch(PROXY_SEARCH_ENDPOINT, {
    headers: { "Contract-Id": contractId },
  });
  if (!res.ok) {
    console.error("Error getting Mega Menu", await res.json());
  }

  return transformMegaMenu(await res.json());
};
