import { useQuery } from "@tanstack/react-query";
import { fetchMiniCart } from "./index";

export function useMiniCart() {
  return useQuery({
    queryKey: ["miniCart"],
    queryFn: () => fetchMiniCart(),
  });
}
