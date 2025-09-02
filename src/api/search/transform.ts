import { AutoSuggestApiResponse, AutoSuggestData } from "./types";

export const transformSuccessfulApiResponse = (
  searchTerm: string,
  res: AutoSuggestApiResponse
): AutoSuggestData => {
  return {
    searchTerm: decodeURIComponent(searchTerm),
    numberResults: res.products?.recordSetTotalMatches ?? 0,
    categories: res.productCategories?.catalogEntryView ?? [],
    products: res.products?.entry ?? [],
  };
};
