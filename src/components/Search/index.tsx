import { useRef, useState } from "react";
import AutoSuggest from "./AutoSuggest";
import clsx from "clsx";
import { SEE_ALL_PRODUCTS_ROUTE } from "../../lib/constants";
import { useAutoSuggestApi } from "./hooks/useAutoSuggestApi";
import { useClickOutside } from "./hooks/useClickOutside";
import { useDebouncedValue } from "./hooks/useDebouncedValue";

const Search = ({ placeholder }: { placeholder?: string }) => {
  const searchContainerRef = useRef<HTMLDivElement>(null!);
  const [searchVal, setSearchVal] = useState("");
  const debouncedSearchVal = useDebouncedValue(searchVal, 300);

  const { autoSuggestData, showAutoSuggest, setShowAutoSuggest, isLoading } =
    useAutoSuggestApi(debouncedSearchVal);

  useClickOutside(searchContainerRef, () => {
    setShowAutoSuggest(false);
    setSearchVal("");
  });

  const handleSearchEnter = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && searchVal.trim()) {
      const encodedQuery = encodeURIComponent(searchVal.trim());
      window.location.href = `${SEE_ALL_PRODUCTS_ROUTE}${encodedQuery}`;
    } else if (e.key === "Enter" && !searchVal) {
      clearSearch();
    }
  };

  const handleSearchInput = (searchTerm: string) => {
    setSearchVal(searchTerm);
    if (!showAutoSuggest) setShowAutoSuggest(true);
  };

  const clearSearch = () => {
    setSearchVal("");
    setShowAutoSuggest(false);
  };

  const handleSearchClick = () => {
    const encodedQuery = encodeURIComponent(searchVal.trim());
    window.location.href = `${SEE_ALL_PRODUCTS_ROUTE}${encodedQuery}`;
  };

  const handleCategoryClick = (term: string) => {
    if (searchVal) {
      setSearchVal(term);
    }
  };

  return (
    <div ref={searchContainerRef} className="sw:h-full sw:w-full sm:sw:px-4">
      <div className="sw:flex sw:items-center sw:w-full sw:h-full">
        <div className="sw:w-full sw:bg-white sw:max-w-[537px]  sw:h-[40px] sw:rounded-full sw:flex sw:items-center sw:gap-1">
          <input
            type="text"
            value={searchVal}
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
          loading={isLoading}
          onCategoryClick={handleCategoryClick}
        />
      )}
    </div>
  );
};

export default Search;
