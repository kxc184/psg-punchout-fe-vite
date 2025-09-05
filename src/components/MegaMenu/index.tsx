import React, { useEffect, useRef, useState } from "react";
import TopCategoryDisplay from "./TopCategoryDisplay";
import clsx from "clsx";
import { useLocation } from "react-router";
import { useMegaMenu } from "../../api/megamenu/useMegaMenu";
import { useWscCtx } from "../../api/wcs/useWscCtx";

interface MegaMenuProps {
  isStuck: boolean;
}

const MegaMenu = ({ isStuck }: MegaMenuProps) => {
  const { data: ctx } = useWscCtx();
  const { data, error } = useMegaMenu(ctx!);
  const location = useLocation();
  const [activeTopCategoryId, setActiveTopCategoryId] = useState<string | null>(
    null
  );
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const derivedShow =
    (isHome && !isStuck) || // show when home
    (isStuck && show) || // show when stuck and hovered
    show; // fallback to hovered

  useEffect(() => {
    // Show top categories only on the homepage ("/" ).
    clearHideTimeout();
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

  useEffect(
    () =>
      // Cleanup timeout on unmount to prevent memory leaks
      // or state updates on unmounted component
      () =>
        clearHideTimeout(),
    []
  );
  if (error) {
    // Handle error state
    console.error("Megamenu error:", error);
    throw error;
  }

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

  return (
    <nav
      className="sw:h-full sw:w-full sw:relative sw:flex sw:items-center swdc-typeset-ui-3b "
      onMouseEnter={() => setShow(true)}
      onMouseLeave={handleMouseLeave}
    >
      <p className=" sw:text-white sw:pl-3">
        {!isStuck ? "SHOP BY CATEGORY" : "SHERWIN-WILLIAMS"}
      </p>

      <ul
        className={clsx(
          "sw:shadow-lg sw:absolute sw:w-[268px] sw:min-h-[432px] sw:py-2 sw:pl-3 sw:left-0 sw:top-full sw:flex sw:flex-col sw:gap-2 sw:bg-[#001234] sw:rounded-b-md ",
          {
            "sw:hidden": !derivedShow,
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
