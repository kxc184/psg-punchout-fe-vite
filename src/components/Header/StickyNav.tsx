import { AUTO_SUGGEST_CONFIG } from "../../lib/constants";
import React from "react";
import MiniCart from "../Cart";
import MegaMenu from "../MegaMenu";
import Search from "../Search";
import { useIntersectionObserver } from "../Search/hooks/useIntersectionObserver";

const StickyNav = () => {
  const stickyRef = React.useRef<HTMLDivElement>(null!);
  const isStuck = useIntersectionObserver(stickyRef);

  return (
    <>
      <div ref={stickyRef} />
      <nav className=" sw:hidden sw:md:block sw:sticky sw:top-0 sw:bg-pro-primary sw:w-full">
        <ul className="sw:relative sw:flex sw:justify-between sw:items-stretch sw:h-[83px] sw:bg-[#001234] sw:rounded-md sw:z-20  sw:max-w-[1090px] sw:mx-auto ">
          <li className="sw:w-full sw:flex sw:items-center sw:justify-center sw:max-w-[256px]  sw:top-[65%] sw:h-full sw:left-0 sw:z-20 sw:rounded-md ">
            <MegaMenu isStuck={isStuck} />
          </li>
          <li className="sw:w-full sw:pl-1">
            <Search placeholder={AUTO_SUGGEST_CONFIG.PLACE_HOLDER.SEARCH} />
          </li>
          <li>
            <MiniCart />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default StickyNav;
