import React from "react";
import clsx from "clsx";
import { IGeneralCategory } from "../../api/megamenu";
import SubCategoryDisplay from "./SubCategoryDisplay";

interface Props {
  categories: IGeneralCategory[];
  activeCategoryId: string | null;
  onMouseEnter: (id: string, level: "category") => void;
}

const CategoryDisplay = ({
  categories,
  activeCategoryId,
  onMouseEnter,
}: Props) => (
  <>
    {categories.map((category) => {
      const isActive = activeCategoryId === category.uniqueID;
      return (
        <React.Fragment key={category.uniqueID}>
          <li className="sw:pl-3">
            <a
              href={category.href || "#"}
              onMouseEnter={() => onMouseEnter(category.uniqueID, "category")}
              className={clsx(" swdc-link", {
                "sw:!text-white hover:sw:!text-white": isActive,
                "sw:!text-white/80": !isActive,
              })}
            >
              {category.name}
              {category.categories.length > 0 && (
                <em className="swdc-if swdc-if--caret-right swdc-icon-[20px] sw:font-bold" />
              )}
            </a>
          </li>

          <div
            className={clsx(
              "sw:overflow-hidden sw:w-full sw:transition sw:duration-1000",
              isActive ? "sw:max-h-[500px]" : "sw:max-h-0",
            )}
          >
            {category.categories.length > 0 && (
              <SubCategoryDisplay subcategories={category.categories} />
            )}
          </div>
        </React.Fragment>
      );
    })}
  </>
);

export default CategoryDisplay;
