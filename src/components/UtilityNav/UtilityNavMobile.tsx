const UtilityNavMobile = () => (
  <ul
    aria-label="mobile utility navigation"
    className="mobile-utilitynav sw:flex sw:flex-col sw:gap-1 sw:bg-[#2a2a2a] sw:text-xs sw:text-white lg:sw:text-left sw:w-full sw:pb-1"
  >
    <li className="account-name sw:bg-[#333] sw:px-3 lg:sw:border-l lg:sw:border-r lg:sw:border-solid lg:sw:border-neutral-70 sw:h-full sw:w-full sw:py-2">
      <p
        className="sw:font-normal sw:text-[1.5rem] sw:leading-none sw:text-[#999]"
        style={{
          fontFamily: '"Frutiger Neue Condensed", Arial, Helvetica, sans-serif',
        }}
      >
        ACCURA HEALTHCARE OF KNOXVILLE
      </p>
      <p className="sw:font-bold sw:text-[#BEBEBE] sw:text-base">
        Account: 2524-3595-3
      </p>
    </li>
    <li className="sw:gap-2 sw:h-full lg:sw:border-r lg:sw:border-solid lg:sw:border-neutral-70 sw:w-full sw:flex sw:items-center sw:py-1">
      <a className="sw:flex sw:gap-2 sw:items-center sw:px-2" href="#">
        <picture>
          <img
            className="!sw:w-2 !sw:h-2"
            src="/en-us/location-white.svg"
            alt="Location"
          />
        </picture>
        <div className="sw:text-[14px] sw:flex sw:flex-col sw:gap-1">
          <p className="sw:underline sw:font-semibold sw:text-white">
            My Store:
          </p>
          <p className="sw:text-[#999] sw:text-[1rem] sw:font-semibold">
            AMES #703966
          </p>
          <p className="sw:text-[#777]">(745) 202-1274</p>
          <p className="sw:text-[#777]">7:00 AM - 5:00 PM</p>
        </div>
      </a>
    </li>
    <li className=" sw:h-full lg:sw:border-r lg:sw:border-solid lg:sw:border-neutral-70 sw:text-center sw:font-semibold sw:w-full sw:flex sw:items-center sw:py-[1em] sw:pr-[2em] ">
      <a
        href="#"
        className="sw:flex sw:gap-2 sw:items-center sw:px-2 sw:text-[14px] sw:text-white visited:sw:text-white"
      >
        <picture>
          <img
            className="!sw:w-2 !sw:h-2"
            src="/en-us/clipboard-with-check-mark-white.svg"
            alt="Clipboard"
          />
        </picture>
        Quick Order
      </a>
    </li>
    <li className="sw:gap-2 sw:h-full lg:sw:border-r lg:sw:border-solid lg:sw:border-neutral-70 sw:text-center sw:font-semibold sw:w-full sw:flex sw:items-center sw:py-1">
      <a
        href="#"
        className="sw:flex sw:gap-2 sw:items-center sw:px-2 sw:text-[14px] sw:text-white visited:sw:text-white"
      >
        <picture>
          <img
            className="!sw:w-2 !sw:h-2"
            src="/en-us/clock-white.svg"
            alt="Clock"
          />
        </picture>
        Order History
      </a>
    </li>
  </ul>
);

export default UtilityNavMobile;
