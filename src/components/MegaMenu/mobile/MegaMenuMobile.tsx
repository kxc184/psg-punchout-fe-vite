"use client";
import "./styles.scss";
import { useState } from "react";
import TopCategoryDisplayMobile from "./TopCategoryDisplayMobile";

import UtilityNavMobile from "../../UtilityNav/UtilityNavMobile";
import { IGeneralCategory } from "../../../api/megamenu";
import clsx from "clsx";
import CategoryDisplayMobile from "./CategoryDisplayMobile";
import { ArrowWThickIcon } from "../../ui/Icons";

const MegaMenuMobile = ({ data }: { data: IGeneralCategory[] | [] }) => {
  const [activeTopCategoryId, setActiveTopCategoryId] = useState<string | null>(
    null
  );
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const handleClick = (id: string, level: "topCategory" | "category") => {
    if (level === "topCategory") {
      setActiveTopCategoryId(id);
      setActiveCategoryId(null);
    } else {
      setActiveCategoryId(id);
    }
  };
  const handleClose = () => {
    setActiveTopCategoryId(null);
    setActiveCategoryId(null);
  };

  return (
    <nav
      aria-label="first-level"
      className={clsx(
        "nav-shadow mobile-megamenu sw:h-full sw:bg-[#333]  sw:w-[300px] sw:transition-all sw:duration-200 ",
        {
          "sw:translate-x-[-285px] peek": activeTopCategoryId,
        }
      )}
    >
      <UtilityNavMobile />
      <div className=" nav-title ">Shop by Category</div>
      <ul
        aria-label="topcategories"
        className={clsx(
          "menu-items sw:block sw:h-full sw:bg-[#333] sw:p-[15px] sw:text-[14px]"
        )}
      >
        {data.map((topCategory) => (
          <TopCategoryDisplayMobile
            key={topCategory.uniqueID}
            topCategory={topCategory}
            onClick={handleClick}
          >
            {topCategory.categories && (
              <nav
                aria-label="categories"
                className={clsx("second-level ", {
                  "sw:translate-x-full ":
                    activeTopCategoryId === topCategory.uniqueID,
                })}
              >
                <div className="nav-title">
                  <button
                    aria-label="close categories"
                    className="sw:hover:bg-[#4d4d4d]"
                    onClick={handleClose}
                  >
                    <ArrowWThickIcon />
                  </button>
                  <a href={topCategory.href} className="sw:hover:text-white">
                    {topCategory.name}
                  </a>
                </div>
                <ul className="category-list">
                  {topCategory.categories.map((category) => (
                    <CategoryDisplayMobile
                      key={category.uniqueID}
                      category={category}
                      activeCategoryId={activeCategoryId}
                      onClick={handleClick}
                    >
                      {category.categories && (
                        <nav className="third-level sw:ml-[-30px] sw:mr-[-15px]">
                          <ul
                            aria-label="third-level"
                            className={clsx("sw:block", {
                              "sw:hidden":
                                activeCategoryId !== category.uniqueID,
                            })}
                          >
                            {category.categories.map((sub) => (
                              // SubCategoryDisplayMobile
                              <li key={sub.uniqueID}>
                                <a
                                  href={sub.href}
                                  className=" sw:text-[14px] sw:hover:text-white"
                                >
                                  {sub.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      )}
                    </CategoryDisplayMobile>
                  ))}
                </ul>
              </nav>
            )}
          </TopCategoryDisplayMobile>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenuMobile;
