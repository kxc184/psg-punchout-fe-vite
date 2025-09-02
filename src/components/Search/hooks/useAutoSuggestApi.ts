import { useState, useEffect } from "react";
import { useAutoSuggest } from "../../../api/search/useAutoSuggest";
import {
  AutoSuggestCategory,
  AutoSuggestProduct,
} from "../../../api/search/types";
import { useWscCtx } from "../../../api/wcs/useWscCtx";

export interface AutoSuggestData {
  searchTerm: string;
  numberResults: number;
  categories: Array<AutoSuggestCategory>;
  products: Array<AutoSuggestProduct>;
}

export function useAutoSuggestApi(query: string) {
  const { data: ctx } = useWscCtx();
  const [autoSuggestData, setAutoSuggestData] = useState<AutoSuggestData>({
    searchTerm: "",
    numberResults: 0,
    categories: [],
    products: [],
  });
  const [showAutoSuggest, setShowAutoSuggest] = useState(false);
  const { data, error } = useAutoSuggest(query, ctx!);

  // Update autoSuggestData when data changes
  useEffect(() => {
    if (data) {
      setAutoSuggestData(data);
      setShowAutoSuggest(true);
    }
    if (error) {
      setShowAutoSuggest(false);
    }
  }, [data, error, query]);

  return {
    autoSuggestData,
    setAutoSuggestData,
    showAutoSuggest,
    setShowAutoSuggest,
  };
}
