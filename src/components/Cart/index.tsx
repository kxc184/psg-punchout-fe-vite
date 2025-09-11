import { useMiniCart } from "../../api/mini-cart/useMiniCart";

const MiniCart = () => {
  const { data } = useMiniCart();
  return (
    <a
      aria-label="mini cart"
      className=" sw:capitalize sw:text-[1rem] sw:font-bold sw:text-center sw:text-white sw:min-w-[50px] sm:sw:shadow-xl  sw:h-full  sw:cursor-pointer sw:flex sw:flex-col sw:gap-[2px] sw:items-center sw:justify-center"
      href="#"
    >
      <div className="sw:flex sw:gap-[4px] sw:items-center md:sw:items-start sw:justify-center">
        {/* <IconRegularShoppingCart className="sw:fill-white sw:h-[1.4em] sw:w-[1.3em] md:sw:h-[1.4rem] md:sw:w-[1.3rem] " /> */}

        {data !== undefined && (
          <p className="sw:text-[#3bf] sw:text-[.65em] md:sw:text-[1em]">
            {data.tally}
          </p>
        )}
      </div>
      <p className="sw:text-[.75rem] sw:font-normal sw:hidden md:sw:block">
        {Intl.NumberFormat("en-us", {
          currency: "USD",
          currencyDisplay: "symbol",
          currencySign: "standard",
          style: "currency",
        }).format(data?.total || 0)}
      </p>
    </a>
  );
};
export default MiniCart;
