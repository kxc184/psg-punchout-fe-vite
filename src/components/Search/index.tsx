import { useEffect, useRef, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import AutoSuggest from "./AutoSuggest";
import clsx from "clsx";
import { SEE_ALL_PRODUCTS_ROUTE } from "../../lib/constants";
import { useAutoSuggestApi } from "./hooks/useAutoSuggestApi";
import { useClickOutside } from "./hooks/useClickOutside";

const Search = ({ placeholder }: { placeholder?: string }) => {
  const searchContainerRef = useRef<HTMLDivElement>(null!);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchVal, setSearchVal] = useState("");
  const [debouncedSearchVal, setDebouncedSearchVal] = useState("");

  // Debounce the search value before passing to useAutoSuggestApi
  const debouncedSetSearchVal = useMemo(
    () => debounce((value: string) => setDebouncedSearchVal(value), 300),
    []
  );

  useEffect(() => {
    debouncedSetSearchVal(searchVal);
    return () => debouncedSetSearchVal.cancel();
  }, [searchVal, debouncedSetSearchVal]);

  const { autoSuggestData, showAutoSuggest, setShowAutoSuggest } =
    useAutoSuggestApi(debouncedSearchVal);

  useClickOutside(searchContainerRef, () => {
    setShowAutoSuggest(false);
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
      setSearchVal("");
    }
  });

  const handleSearchEnter = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      e.key === "Enter" &&
      !!searchInputRef.current &&
      searchInputRef.current.value &&
      searchInputRef.current.value.trim()
    ) {
      const encodedQuery = encodeURIComponent(
        searchInputRef.current.value.trim()
      );
      window.location.href = `${SEE_ALL_PRODUCTS_ROUTE}${encodedQuery}`;
    } else if (
      e.key === "Enter" &&
      !!searchInputRef.current &&
      searchInputRef.current.value
    ) {
      clearSearch();
    }
  };

  const handleSearchInput = (searchTerm: string) => {
    setSearchVal(searchTerm);
  };

  const clearSearch = () => {
    setSearchVal("");
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
    setShowAutoSuggest(false);
  };

  const handleSearchClick = () => {
    if (searchVal.trim()) {
      const encodedQuery = encodeURIComponent(searchVal.trim());
      window.location.href = `${SEE_ALL_PRODUCTS_ROUTE}${encodedQuery}`;
    }
  };

  // Handler to instantly update both searchVal and debouncedSearchVal on category click
  const handleCategoryClick = (term: string) => {
    setSearchVal(term);
    setDebouncedSearchVal(term); // instantly update debounced value
  };

  return (
    <div ref={searchContainerRef} className="sw:h-full sw:w-full sm:sw:px-4">
      <div className="sw:flex sw:items-center sw:w-full sw:h-full">
        <div className="sw:w-full sw:bg-white  sw:h-[40px] sw:rounded-full sw:flex sw:items-center sw:gap-1">
          <input
            ref={searchInputRef}
            type="text"
            placeholder={placeholder}
            className="sw:w-full sw:h-full sw:outline-none sw:rounded-full swdc-typeset-ui-4b sw:pl-2 search-input"
            onChange={(e) => handleSearchInput(e.target.value)}
            aria-label="Search"
            autoComplete="off"
            role="searchbox"
            id="search"
            onKeyDown={handleSearchEnter}
          />
          <button
            onClick={clearSearch}
            className={clsx(
              "swdc-button swdc-button--text swdc-button--action swdc-button--circle ",
              {
                "sw:!hidden": !searchVal.length,
              }
            )}
          >
            <em className="swdc-if swdc-if--error"></em>
          </button>
          <button
            className="swdc-button swdc-button--text swdc-button--action swdc-button--circle"
            onClick={handleSearchClick}
          >
            <em className="swdc-if swdc-if--search search-icon"></em>
          </button>
        </div>
      </div>
      {showAutoSuggest && (
        <AutoSuggest
          autoSuggestData={autoSuggestData}
          onCategoryClick={handleCategoryClick}
        />
      )}
    </div>
  );
};

export default Search;
