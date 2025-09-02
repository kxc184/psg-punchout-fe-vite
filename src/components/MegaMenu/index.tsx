import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import TopCategoryDisplay from "./TopCategoryDisplay";
import clsx from "clsx";
import { useMegaMenu } from "../../api/megamenu/useMegaMenu";
import { useWscCtx } from "../../api/wcs/useWscCtx";

const MegaMenu = () => {
  // Assume ctx and menu data are always present (guaranteed by layout)
  const { data: ctx } = useWscCtx();
  const { data } = useMegaMenu(ctx!);
  const [activeTopCategoryId, setActiveTopCategoryId] = useState<string | null>(
    null
  );
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const location = useLocation();
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Show top categories only on the homepage ("/" or "/en-us").
    // This app is mounted at "/en-us" via split origin, so we treat
    // both as home routes for local development.
    clearHideTimeout();
    setIsHome(location.pathname === "/" || location.pathname === "/en-us");
  }, [location.pathname]);

  useEffect(
    () =>
      // Cleanup timeout on unmount to prevent memory leaks
      // or state updates on unmounted component
      () =>
        clearHideTimeout(),
    []
  );

  const clearHideTimeout = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = (id: string, level: "topCategory" | "category") => {
    clearHideTimeout();
    if (level === "topCategory") {
      setActiveTopCategoryId(id);
      setActiveCategoryId(null);
    } else {
      setActiveCategoryId(id);
    }
  };

  const handleMouseLeave = () => {
    clearHideTimeout();
    hideTimeoutRef.current = setTimeout(() => {
      setActiveTopCategoryId(null);
      setActiveCategoryId(null);
      setShow(false);
    }, 500);
  };

  // No loading or error UI here; handled by layout

  return (
    <nav
      className=" sw:bg-[#001234] sw:text-white megaMenu"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sw:h-[68px] sw:pl-[30px] sw:w-[256px] sw:flex sw:items-center sw:bg-[#001234]">
        <p
          className="sw:text-white sw:text-sm sw:w-full sw:text-[.875rem] sw:font-bold"
          style={{ fontFamily: '"Frutiger Neue", sans-serif' }}
        >
          SHOP BY CATEGORY
        </p>
      </div>

      <ul
        className={clsx(
          "topCategories  sw:absolute sw:w-[256px] sw:min-h-[425px] sw:p-[15px] sw:pl-[30px] sw:flex sw:flex-col sw:bg-[#001234]",
          {
            "sw:hidden": !show && !isHome,
          }
        )}
        onMouseLeave={handleMouseLeave}
      >
        {data?.map((topCategory) => (
          <TopCategoryDisplay
            key={topCategory.uniqueID}
            topCategory={topCategory}
            isActive={activeTopCategoryId === topCategory.uniqueID}
            activeCategoryId={activeCategoryId}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            clearHideTimeout={clearHideTimeout}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu;
