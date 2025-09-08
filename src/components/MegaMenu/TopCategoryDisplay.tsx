import React from "react";
import clsx from "clsx";
import { IGeneralCategory } from "../../api/megamenu";
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
    <li>
      <a
        href={topCategory.href || "#"}
        onMouseEnter={() => onMouseEnter(topCategory.uniqueID, "topCategory")}
        className={clsx(" swdc-link", {
          "sw:!text-white hover:sw:!text-white": isActive,
          "sw:!text-white/80": !isActive,
        })}
      >
        {topCategory.name}
        {topCategory.categories.length > 0 && (
          <em className="swdc-if swdc-if--caret-right swdc-icon-[20px] sw:font-bold" />
        )}
      </a>
    </li>

    {topCategory.categories.length > 0 && (
      <ul
        className={clsx(
          "sw:bg-[#000A2C] sw:space-y-1 sw:overflow-y-auto sw:ease-[cubic-bezier(0.25,0.1,0.25,0.1)] sw:-translate-x-full sw:absolute sw:left-[268px] sw:top-0 sw:z-[-1] sw:h-full sw:w-[268px] sw:transition-all sw:duration-200 sw:py-2",
          {
            "sw:translate-x-0": isActive,
          },
        )}
        style={{
          // Inline style is required for boxShadow here because Tailwind CSS does not support custom inset box-shadow values out of the box.
          // This preserves the subtle depth effect from the legacy SCSS design without needing a custom Tailwind plugin or extra CSS file.
          boxShadow: "inset 0.5em 0 0.5em -0.25em rgba(0,0,0,0.3)",
        }}
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
