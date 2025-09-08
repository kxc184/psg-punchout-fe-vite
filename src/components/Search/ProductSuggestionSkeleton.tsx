const ProductSuggestionSkeleton = () => (
  <section className="sw:bg-white sw:w-full sw:absolute sw:left-0 sw:z-[1000]">
    <div className="sw:grid sw:grid-cols-[256px_auto]">
      <ul className="sw:p-2 sw:flex sw:flex-col sw:gap-2 sw:my-1">
        {[...Array(4)].map((_, i) => (
          <li
            key={i}
            className="sw:bg-gray-200 sw:animate-pulse sw:h-2 sw:rounded"
          ></li>
        ))}
      </ul>
      <div className="sw:border sw:border-[#e5e5e5] sw:border-t-0">
        <ul className="sw:grid sw:grid-cols-4 sw:gap-2 sw:h-full sw:p-2">
          {[...Array(4)].map((_, i) => (
            <li
              key={i}
              className="sw:bg-gray-200 sw:animate-pulse sw:h-full sw:rounded"
            ></li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ProductSuggestionSkeleton;
