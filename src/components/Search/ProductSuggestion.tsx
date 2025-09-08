import { AutoSuggestData } from "../../api/search/types";
import { SEE_ALL_PRODUCTS_ROUTE } from "../../lib/constants";

const ProductSuggestion = ({
  autoSuggestData,
}: {
  autoSuggestData: AutoSuggestData;
}) => {
  return (
    <section
      className=" sw:p-2 sw:border-1 sw:border-solid sw:border-[#e5e5e5] sw:border-t-0"
      aria-label="product suggestion"
    >
      {autoSuggestData.numberResults === 0 ? (
        <h1 className="swdc-typeset-body-1">
          There are 0 results for "{autoSuggestData.searchTerm}".
        </h1>
      ) : (
        <>
          <h1 className="swdc-typeset-ui-3b  sw:p-1 sw:!mb-1">
            ({autoSuggestData.numberResults}) results for "
            {autoSuggestData.searchTerm}"{" "}
            <a
              href={`${SEE_ALL_PRODUCTS_ROUTE}${encodeURIComponent(
                autoSuggestData.searchTerm
              )}`}
              className="sw:!ml-1 sw:text-pro-secondary"
            >
              See all
            </a>
          </h1>
          <div className="sw:grid sw:grid-cols-4 sw:gap-2">
            {autoSuggestData.products.map((product) => (
              <div key={product.uniqueID}>
                <a href={`https://${product.url}`}>
                  <picture className="sw:pb-2">
                    <img src={product.thumbnail} alt={product.name} />
                  </picture>
                </a>
                <a
                  href={`https://${product.url}`}
                  className="sw:text-pro-secondary"
                >
                  {product.name}
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ProductSuggestion;
