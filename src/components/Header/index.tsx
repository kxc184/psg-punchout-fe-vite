import MegaMenu from "../MegaMenu";
import Search from "../Search";
import MiniCart from "../Cart";
import { AUTO_SUGGEST_CONFIG } from "../../lib/constants";
// import HeaderMobile from "./HeaderMobile";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      {/* screen sizes below md will show mobile version of header and hide desktop version, vise versa */}
      {/* <HeaderMobile /> */}
      <div className="sw:hidden sw:md:block headerContainer sw:w-full sw:mx-auto">
        <div className=" sw:w-full sw:bg-repeat sw:bg-center sw:bg-pro-primary sw:shadow-lg">
          <div className="sw:container sw:relative sw:max-w-[990px] sw:mx-auto">
            <div className="sw:flex sw:items-center sw:justify-start">
              <Link to="/">
                <picture>
                  <img
                    className=" sw:px-[30px] sw:py-[15px] sw:object-fit "
                    src="https://s7d1.scene7.com/is/image/sherwinwilliamsqa/sherwin-williams-header-logo?scl=1&fmt=png-alpha"
                    alt="Sherwin-Williams Logo"
                  />
                </picture>
              </Link>
            </div>
            <nav>
              <ul className="sw:flex sw:justify-between sw:items-stretch sw:max-h-[70px] sw:bg-[#001234] ">
                <li className=" sw:max-w-[256px] sw:top-[65%] sw:left-0 sw:h-fit sw:text-[13px] sw:z-20 sw:col-span-1">
                  <MegaMenu />
                </li>
                <li className="sw:w-full">
                  <Search
                    placeholder={AUTO_SUGGEST_CONFIG.PLACE_HOLDER.SEARCH}
                  />
                </li>
                <li>
                  <MiniCart />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
