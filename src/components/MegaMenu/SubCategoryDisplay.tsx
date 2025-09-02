import React from "react";
import { IGeneralCategory } from "../../api/megamenu";

interface Props {
  subcategories: IGeneralCategory[];
}

const SubCategoryDisplay = ({ subcategories }: Props) => (
  <ul className="sw:mt-[15px] sw:pr-[15px] sw:pl-[30px] sw:w-full sw:flex sw:flex-col sw:bg-black/20">
    {subcategories.map((sub) => (
      <li key={sub.uniqueID} className="sw:py-[13px]">
        <a
          href={sub.href}
          className="sw:text-[#979797] sw:hover:text-white sw:font-semibold"
        >
          {sub.name}
        </a>
      </li>
    ))}
  </ul>
);

export default SubCategoryDisplay;
