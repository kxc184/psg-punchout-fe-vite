const TradingPartnerInfoError = () => {
  return (
    <li className=" sw:flex sw:justify-center sw:items-center sw:gap-2 sw:p-1 sw:rounded sw:bg-error-light">
      <em className="swdc-if swdc-if--map-pin sw:text-error"></em>
      <div className=" sw:flex sw:flex-col sw:justify-center sw:items-start">
        <p className="sw:font-bold sw:break-normal swdc-typeset-ui-4b sw:text-error ">
          Failed
        </p>
        <p className=" swdc-typeset-ui-5 sw:opacity-75 sw:text-error">
          Something went wrong...
        </p>
      </div>
    </li>
  );
};

export default TradingPartnerInfoError;
