import { Link, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.error("ReactRouterError:", error.message);
  return (
    <div className="sw:fixed sw:inset-0 sw:z-10 sw:w-full sw:min-h-screen">
      {/* Page structure (header, body, footer) */}
      <div className="sw:relative sw:z-20 sw:flex sw:flex-col sw:min-h-screen sw:w-full">
        <div className="sw:h-[72px] sw:mx-auto sw:min-w-[990px] sw:max-w-[1440px]"></div>
        <div className="sw:hidden sw:md:block sw:bg-pro-primary sw:text-white sw:py-[15px] sw:h-[183px] ">
          <div className="sw:container sw:max-w-[990px] sw:mx-auto sw:flex sw:items-center sw:justify-between">
            <div className="sw:flex sw:flex-col sw:w-full   sw:mt-[-.9rem]">
              <Link to="/">
                <picture>
                  <img
                    className="sw:px-[30px] sw:py-[15px] sw:object-fit"
                    src="https://s7d1.scene7.com/is/image/sherwinwilliamsqa/sherwin-williams-header-logo?scl=1&fmt=png-alpha"
                    alt="Sherwin-Williams Logo"
                  />
                </picture>
              </Link>
              <div className="  sw:h-[70px] sw:w-full sw:bg-[#001234] sw:flex "></div>
            </div>
          </div>
        </div>
        <div className="sw:flex-1  sw:w-full sw:bg-white/80 sw:relative sw:flex sw:items-center sw:justify-center"></div>
        <div className="sw:h-[255px]  sw:bg-gray-200"></div>
      </div>
      {/* Modal above the blur, centered, using <dialog> */}

      <dialog className="sw:fixed sw:w-full sw:h-full sw:inset-0 sw:z-30 sw:flex sw:items-center sw:justify-center sw:backdrop-blur-sm sw:bg-[#2F2F3080] ">
        <div className="sw:relative sw:bg-white sw:rounded-xs sw:shadow-2xl sw:p-4 sw:max-w-md sw:w-full sw:flex sw:flex-col sw:gap-2 ">
          {/* <button
              onClick={handleClose}
              className="sw:!absolute sw:top-0 sw:right-0 swdc-button swdc-button--action swdc-button--circle swdc-button--sm	"
            >
              <em className=" swdc-if swdc-if--close swdc-icon-em	"></em>
            </button> */}

          <h1 className="swdc-typeset-display-4 sw:font-bold  sw:w-full">
            Ooops...
          </h1>
          <p className="swdc-typeset-display-5 sw:w-full">
            Something went wrong. Please try again.
          </p>
          <a
            href="/"
            className="swdc-button swdc-button--filled sw:inline-block sw:w-full sw:mt-2 sw:text-center"
          >
            Retry
          </a>
        </div>
      </dialog>
    </div>
  );
};

export default Error;
