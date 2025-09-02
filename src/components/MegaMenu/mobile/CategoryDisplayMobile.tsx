import { IGeneralCategory } from "../../../api/megamenu";
import { ArrowIcon } from "../../../components/ui/Icons";
import { clsx } from "clsx";
import React from "react";

interface CategoryDisplayMobileProps {
  category: IGeneralCategory;
  children: React.ReactNode;
  activeCategoryId: string | null;
  onClick: (id: string, level: "category") => void;
}

const CategoryDisplayMobile: React.FC<CategoryDisplayMobileProps> = ({
  category,
  children,
  activeCategoryId,
  onClick,
}) => {
  return (
    <li
      key={category.uniqueID}
      onMouseEnter={() => onClick(category.uniqueID, "category")}
    >
      <a
        href={category.href}
        className={clsx(" sw:hover:text-white sw:text-[1rem] sw:relative ", {
          "sw:hover:underline": category.categories.length > 0,
          "active-icon":
            activeCategoryId === category.uniqueID &&
            category.categories.length > 0,
        })}
      >
        {category.name}
      </a>
      <button
        aria-label="show subcategories"
        className="sw:inline sw:pr-5"
        onClick={() => onClick(category.uniqueID, "category")}
      >
        {category.categories && <ArrowIcon />}
      </button>
      {children}
    </li>
  );
};

export default CategoryDisplayMobile;
