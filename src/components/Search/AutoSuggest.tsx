import ProductSuggestion from "./ProductSuggestion";
import { AutoSuggestData } from "./hooks/useAutoSuggestApi";
import ProductSuggestionLoading from "./ProductSuggestionSkeleton";

const AutoSuggest = ({
  autoSuggestData,
  loading,
  onCategoryClick,
}: {
  loading: boolean;
  autoSuggestData: AutoSuggestData;
  onCategoryClick: (term: string) => void;
}) => {
  if (loading) {
    return <ProductSuggestionLoading />;
  }
  return (
    <section
      className=" sw:shadow-lg sw:bg-white sw:w-full sw:absolute sw:top-[auto] sw:left-0 sw:z-[1000] swdc-typeset-ui-4b"
      aria-label="auto suggest"
    >
      <div className="sw:h-full sw:grid sw:grid-cols-[268px_auto]">
        <section
          className="categorySuggestions sw:p-2 sw:flex sw:flex-col sw:text-pro-secondary sw:my-1"
          aria-label="category suggestion"
        >
          {autoSuggestData.categories?.length > 0 && (
            <ul>
              {autoSuggestData.categories.map((category, i) => (
                <li
                  key={`${i}-${category.catent_product_name}`}
                  className="sw:mb-2"
                >
                  <button
                    className=" sw:text-start swdc-link"
                    onClick={() => {
                      onCategoryClick(category.catent_product_name);
                    }}
                  >
                    {category.catent_product_name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
        <ProductSuggestion autoSuggestData={autoSuggestData} />
      </div>
    </section>
  );
};

export default AutoSuggest;
