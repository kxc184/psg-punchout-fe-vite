import { useMiniCart } from "../../api/mini-cart/useMiniCart";

const MiniCart = () => {
  const { data } = useMiniCart();
  console.log(data)
  const totalPrice = Number(data?.totalPrice);
  return (
   <div className="sw:flex sw:items-center sw:h-full sw:justify-center sw:pr-3 sw:text-center">
      <a
        aria-label="mini cart"
        className="swdc-typeset-button-1 sw:text-white"
        href="#"
      >
        <div className="sw:relative">
          <em className="swdc-if swdc-if--shopping-cart"></em>
          {data?.quantity && (
            <div className="sw:absolute sw:top-[-6px] sw:right-[2px] sw:h-[18px] sw:w-[18px] sw:bg-[#001234] sw:text-center sw:rounded-full">
              {data.quantity}
            </div>
          )}
        </div>
        <p className="sw:text-center swdc-typeset-ui-5">
          {!isNaN(totalPrice) ? Intl.NumberFormat("en-us", {
            currency: "USD",
            currencyDisplay: "symbol",
            currencySign: "standard",
            style: "currency",
          }).format(totalPrice) : null}
        </p>
      </a>
    </div>
  );
};
export default MiniCart;
