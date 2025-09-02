import { useQuery } from "@tanstack/react-query";
import { fetchMegaMenu } from "./index";
import { IWcsCtx } from "../wcs";

export function useMegaMenu(ctx: IWcsCtx | undefined) {
  return useQuery({
    queryKey: ["megamenu", { contractId: ctx?.contractId }],
    queryFn: () => fetchMegaMenu({ contractId: ctx!.contractId }),
    enabled: !!ctx?.contractId,
  });
}
