import { useQuery } from "@tanstack/react-query";
import fetchAutoSuggest from "./auto-suggest";
import { IWcsCtx } from "../wcs";
import { defaultRetry } from "../../lib/utils";

export function useAutoSuggest(query: string, ctx: IWcsCtx | undefined) {
  return useQuery({
    queryKey: ["autoSuggest", ctx?.contractId, ctx?.organizationId, query],
    queryFn: () => {
      return fetchAutoSuggest({
        contractId: ctx!.contractId,
        organizationId: ctx!.organizationId,
        searchTerm: query,
      });
    },
    enabled: query.length >= 3 && !!ctx?.contractId && !!ctx?.organizationId,
    retry: defaultRetry,
  });
}
