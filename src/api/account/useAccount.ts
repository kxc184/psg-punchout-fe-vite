import { useQuery } from "@tanstack/react-query";
import { fetchAccount } from "./index";

export function useAccount() {
  return useQuery({
    queryKey: ["account"],
    queryFn: () => fetchAccount(),
    retry: false,
  });
}
