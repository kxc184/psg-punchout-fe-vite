import React from "react";
import clsx from "clsx";
import { IGeneralCategory } from "../../api/megamenu";
import { ArrowIcon } from "../ui/Icons";
import CategoryDisplay from "./CategoryDisplay";

interface Props {
  topCategory: IGeneralCategory;
  isActive: boolean;
  activeCategoryId: string | null;
  onMouseEnter: (id: string, level: "topCategory" | "category") => void;
  onMouseLeave: () => void;
  clearHideTimeout: () => void;
}

const TopCategoryDisplay = ({
  topCategory,
  isActive,
  activeCategoryId,
  onMouseEnter,
  onMouseLeave,
  clearHideTimeout,
}: Props) => (
  <>
    <li
      className={clsx("sw:py-[13px] sw:relative", {
        "sw:hover:underline active-icon":
          isActive && topCategory.categories.length > 0,
      })}
    >
      <a
        href={topCategory.href || "#"}
        onMouseEnter={() => onMouseEnter(topCategory.uniqueID, "topCategory")}
        className={clsx(
          "sw:inline sw:cursor-pointer sw:text-[#979797] sw:font-semibold sw:leading-[normal] sw:hover:text-white",
          { "sw:text-white": isActive },
        )}
      >
        {topCategory.name}
        {topCategory.categories.length > 0 && <ArrowIcon />}
      </a>
    </li>

    {topCategory.categories.length > 0 && (
      <ul
        className={clsx(
          "sw:bg-[#001234] sw:overflow-y-auto sw:ease-[cubic-bezier(0.25,0.1,0.25,0.1)] sw:-translate-x-full  sw:absolute sw:left-[256px] sw:top-0 sw:z-[-1] sw:h-full sw:w-[256px] sw:transition-transform sw:duration-200 ",
          {
            "sw:translate-x-0": isActive,
          },
        )}
        onMouseEnter={clearHideTimeout}
        onMouseLeave={onMouseLeave}
      >
        <CategoryDisplay
          categories={topCategory.categories}
          activeCategoryId={activeCategoryId}
          onMouseEnter={onMouseEnter}
        />
      </ul>
    )}
  </>
);

export default TopCategoryDisplay;
