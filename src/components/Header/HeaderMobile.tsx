"use client";
import { useState } from "react";
import MiniCart from "../Cart";
import Search from "../Search";
import { MenuIcon, XIcon } from "../ui/Icons";
import { AUTO_SUGGEST_CONFIG } from "../../lib/constants";
import MegaMenuMobile from "../MegaMenu/mobile/MegaMenuMobile";
import { Link } from "react-router";
import clsx from "clsx";

const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="headerContainerMobile sw:md:hidden sw:w-full">
      <div className=" sw:w-full sw:bg-[#373737]">
        <div className="sw:container sw:relative sw:max-w-[760px] sw:mx-auto">
          <div className="sw:flex sw:items-center sw:h-[115px]">
            <Link to="/">
              <picture>
                <img
                  className="  sw:pl-4 sw:object-fit "
                  src="/sherwin-williams-header-logo.png"
                  alt="Sherwin-Williams Logo"
                />
              </picture>
            </Link>
          </div>
          <div className="sw:flex sw:h-[45px] sw:w-full sw:bg-[#373737] sw:border-t-[#4c4c4c] sw:border-solid sw:border-y-[1px] sw:border-b-[#111] ">
            <div className="sw:flex sw:items-center sw:justify-center sw:w-[50px] sw:h-full">
              <button
                aria-label="show megamenu"
                className="sw:text-white sw:text-3xl sw:flex sw:items-center sw:justify-center"
                onClick={() => setShowMenu(!showMenu)}
              >
                {showMenu ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
            <div
              aria-label="mobile-megamenu"
              className={clsx(
                "sw:bg-[#333] sw:absolute sw:w-[300px] sw:top-[100%] sw:h-[calc(100vh-160px)] sw:transition-all sw:duration-200 sw:text-base sw:z-20 sw:col-span-1",
                {
                  "sw:left-0 sw:block": showMenu,
                  "sw:left-[-300px]": !showMenu,
                }
              )}
            >
              <MegaMenuMobile />
            </div>
            <div className="sw:flex sw:flex-1 sw:items-center sw:justify-center sw:h-full md:sw:px-4">
              <Search placeholder={AUTO_SUGGEST_CONFIG.PLACE_HOLDER.SEARCH} />
            </div>
            <div>
              <MiniCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
