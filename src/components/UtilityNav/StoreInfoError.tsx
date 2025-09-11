const StoreInfoError = () => {
  return (
    <li className="sw:flex  sw:rounded  sw:bg-error-light sw:p-1">
      <a className="sw:flex sw:gap-2 sw:items-center " href="#">
        <em className="swdc-if swdc-if--store swdc-icon-1 sw:text-error"></em>
        <div className="sw:items-start ">
          <span className="sw:whitespace-nowrap ">
            <p className="swdc-typeset-ui-4b sw:text-error">Failed</p>
            <p className="swdc-typeset-ui-5 sw:opacity-75 sw:text-error">
              Something went wrong...
            </p>
          </span>
        </div>
      </a>
    </li>
  );
};

export default StoreInfoError;
