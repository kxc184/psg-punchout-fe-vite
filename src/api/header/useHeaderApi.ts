import { useQuery } from "@tanstack/react-query";
import { fetchHeader } from "./index";

export function useHeaderApi() {
  return useQuery({
    queryKey: ["header"],
    queryFn: () => fetchHeader(),
    retry: false,
  });
}
