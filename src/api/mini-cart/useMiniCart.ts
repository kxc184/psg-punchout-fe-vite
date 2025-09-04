import { useQuery } from "@tanstack/react-query";
import { fetchMiniCart } from "./index";
import { defaultRetry } from "../../lib/utils";

export function useMiniCart() {
  return useQuery({
    queryKey: ["miniCart"],
    queryFn: () => fetchMiniCart(),
    retry: defaultRetry,
  });
}
