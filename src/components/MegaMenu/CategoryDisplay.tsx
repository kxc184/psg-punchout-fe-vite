import React from "react";
import clsx from "clsx";
import { IGeneralCategory } from "../../api/megamenu";
import { ArrowIcon } from "../ui/Icons";
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
          <li
            onMouseEnter={() => onMouseEnter(category.uniqueID, "category")}
            className={clsx(
              "sw:cursor-pointer sw:py-[13px] sw:pr-[15px] sw:pl-[30px] sw:relative",
              {
                "sw:hover:underline active-icon":
                  isActive && category.categories.length > 0,
              },
            )}
          >
            <a
              href={category.href}
              className={clsx(
                "sw:inline sw:relative sw:cursor-pointer sw:text-[#979797] sw:leading-normal sw:font-semibold sw:hover:text-white",
                { "sw:text-white": isActive },
              )}
            >
              {category.name}
              {category.categories.length > 0 && <ArrowIcon />}
            </a>
          </li>
          <div
            className={clsx(
              "sw:overflow-hidden sw:w-full",
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
