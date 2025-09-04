import { useQuery } from "@tanstack/react-query";
import { fetchWcsCtx } from "./index";

export function useWscCtx() {
  return useQuery({
    queryKey: ["wscCtx"],
    queryFn: fetchWcsCtx,
    retry: false,
  });
}
