import React from "react";
import { Link } from "react-router";

const HeaderError = () => {
  return (
    <header className="sw:hidden sw:md:block headerContainer sw:w-full sw:mx-auto sw:bg-pro-primary sw:text-white sw:py-[15px]">
      <div className="sw:container sw:max-w-[990px] sw:mx-auto sw:flex sw:items-center sw:justify-between">
        <div className="sw:flex sw:items-center">
          <Link to="/">
            <picture>
              <img
                className="sw:px-[30px] sw:py-[15px] sw:object-fit"
                src="https://s7d1.scene7.com/is/image/sherwinwilliamsqa/sherwin-williams-header-logo?scl=1&fmt=png-alpha"
                alt="Sherwin-Williams Logo"
              />
            </picture>
          </Link>
          <span className="sw:ml-4 sw:text-lg sw:text-red-300 sw:font-bold">
            An error occurred loading your account context. Please try again
            later.
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderError;
