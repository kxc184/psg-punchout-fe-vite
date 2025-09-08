import React from "react";
import { IGeneralCategory } from "../../api/megamenu";

interface Props {
  subcategories: IGeneralCategory[];
}

const SubCategoryDisplay = ({ subcategories }: Props) => (
  <ul className=" sw:pl-3 sw:py-1 sw:w-full  sw:flex sw:flex-col sw:gap-1 sw:bg-black/30">
    {subcategories.map((sub) => (
      <li key={sub.uniqueID} className="">
        <a
          href={sub.href}
          className="swdc-link sw:!text-white/80 sw:hover:!text-white"
        >
          {sub.name}
        </a>
      </li>
    ))}
  </ul>
);

export default SubCategoryDisplay;
