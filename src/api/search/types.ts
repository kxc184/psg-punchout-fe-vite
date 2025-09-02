export interface AutoSuggestProduct {
  name: string;
  uniqueID: string;
  url: string;
  thumbnail: string;
}

export interface AutoSuggestCategory {
  catent_product_name: string;
}

export interface AutoSuggestApiResponse {
  status?: number;
  productCategories?: {
    catalogEntryView?: AutoSuggestCategory[];
  };
  products?: {
    recordSetTotalMatches: number;
    entry?: AutoSuggestProduct[];
  };
}
export interface AutoSuggestApiError {
  error: {
    timestamp: string;
    status: number;
    error: string;
    path: string;
  };
}
export interface AutoSuggestData {
  searchTerm: string;
  numberResults: number;
  categories: AutoSuggestCategory[];
  products: AutoSuggestProduct[];
}
