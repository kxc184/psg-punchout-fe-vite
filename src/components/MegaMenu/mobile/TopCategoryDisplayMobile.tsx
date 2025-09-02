import { IGeneralCategory } from "../../../api/megamenu";
import { ArrowIcon } from "../../../components/ui/Icons";
import clsx from "clsx";
import React from "react";

interface Props {
  topCategory: IGeneralCategory;
  children: React.ReactNode;
  onClick: (id: string, level: "topCategory" | "category") => void;
}

const TopCategoryDisplayMobile: React.FC<Props> = ({
  topCategory,
  children,
  onClick,
}) => {
  const { uniqueID, href, name } = topCategory;
  return (
    <li key={uniqueID}>
      <a
        href={href}
        {...(topCategory.categories && {
          onMouseEnter: () => onClick(uniqueID, "topCategory"),
        })}
        className={clsx("sw:text-[1rem] sw:hover:text-white", {
          "sw:hover:underline": topCategory.categories,
        })}
      >
        {name}
        <button
          aria-label="show categories"
          onClick={() => onClick(uniqueID, "topCategory")}
        >
          {topCategory.categories && <ArrowIcon />}
        </button>
      </a>
      {children}
    </li>
  );
};

export default TopCategoryDisplayMobile;
