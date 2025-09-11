import { useEffect, useRef, useState } from "react";
import AutoSuggest from "./AutoSuggest";
import clsx from "clsx";
import { SEE_ALL_PRODUCTS_ROUTE } from "../../lib/constants";
import { useAutoSuggestApi } from "./hooks/useAutoSuggestApi";
import { useClickOutside } from "./hooks/useClickOutside";
import { useDebouncedValue } from "./hooks/useDebouncedValue";

const Search = ({ placeholder }: { placeholder?: string }) => {
  const searchContainerRef = useRef<HTMLDivElement>(null!);
  const [searchVal, setSearchVal] = useState("");
  const [autoSuggestTerm, setAutoSuggestTerm] = useState("");
  const debouncedSearchVal = useDebouncedValue(searchVal.trim(), 300);

  useEffect(()=> {
    setAutoSuggestTerm(debouncedSearchVal);
  }, [debouncedSearchVal]);

  const { autoSuggestData, showAutoSuggest, setShowAutoSuggest, isLoading } =
    useAutoSuggestApi(autoSuggestTerm)

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
   setAutoSuggestTerm(term);
  };

  return (
    <div ref={searchContainerRef} className="sw:h-full sw:w-full sm:sw:px-4">
      <div className="sw:flex sw:items-center sw:w-full sw:h-full">
        <div className="sw:w-full sw:bg-white sw:max-w-[537px]  sw:h-[22px] sw:md:h-[40px] sw:rounded-sm  sw:md:rounded-full sw:flex sw:items-center ">
          <input
            type="text"
            value={searchVal}
            placeholder={placeholder}
            className="sw:w-full sw:h-full sw:outline-none sw:rounded-sm sw:md:rounded-full swdc-typeset-ui-4b sw:pl-2"
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
              "swdc-button  swdc-button--text swdc-button--action  ",
              {
                "sw:!hidden": !searchVal.length,
              }
            )}
          >
            <em className="swdc-if swdc-if--close sw:!text-xs sw:md:!text-lg "></em>
          </button>
          <button
            className="swdc-button  swdc-button--text swdc-button--action"
            onClick={handleSearchClick}
          >
            <em className="swdc-if swdc-if--search sw:!text-xs sw:md:!text-lg "></em>
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
