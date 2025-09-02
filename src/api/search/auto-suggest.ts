import { PROXY_AUTOSUGGEST_ENDPOINT } from "../../lib/constants";
import { HttpError } from "../HttpError";
import { transformSuccessfulApiResponse } from "./transform";

export interface AutoSuggestProps {
  contractId: string;
  organizationId: string;
  searchTerm: string;
}

const fetchAutoSuggest = async ({
  contractId,
  organizationId,
  searchTerm,
}: AutoSuggestProps) => {
  const url = new URL(PROXY_AUTOSUGGEST_ENDPOINT, window.location.origin);
  if (searchTerm) {
    url.searchParams.set("searchTerm", searchTerm);
  }
  const res = await fetch(url.toString(), {
    headers: {
      "contract-id": contractId,
      "parent-org-entity-id": organizationId,
    },
  });
  if (!res.ok) {
    throw new HttpError("Failed to fetch auto-suggest data", res.status);
  }
  const autoSuggestResponse = await res.json();
  return transformSuccessfulApiResponse(searchTerm, autoSuggestResponse);
};
export default fetchAutoSuggest;
