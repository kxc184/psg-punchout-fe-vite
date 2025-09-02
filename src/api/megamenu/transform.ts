import { IGeneralCategory } from ".";

// Helper to ensure categories is always an array
const normalizeCategories = (
  categories?: IGeneralCategory[],
): IGeneralCategory[] => {
  return categories ?? [];
};

// Accepts the full API response object, extracts and normalizes categories
export const transformMegaMenu = (response: {
  categories?: IGeneralCategory[];
}): IGeneralCategory[] => {
  const categories = response?.categories ?? [];
  const baseCategoryUrl =
    "/CategoryDisplay?storeId=10701&catalogId=10551&urlLangId=-1&langId=-1&pageView=grid&";
  const updatedCategories: IGeneralCategory[] = categories.map(
    (topCategory) => ({
      ...topCategory,
      categories: normalizeCategories(topCategory.categories),
    }),
  );

  updatedCategories.forEach((topCategory) => {
    const topUrl = `${baseCategoryUrl}categoryId=${topCategory.uniqueID}`;
    topCategory.href = topUrl;

    topCategory.categories.forEach((midCategory) => {
      const midUrl = `${baseCategoryUrl}top_category=${topCategory.uniqueID}&categoryId=${midCategory.uniqueID}`;
      midCategory.href = midUrl;
      midCategory.categories = normalizeCategories(midCategory.categories);

      midCategory.categories.forEach((subCategory) => {
        const subUrl = `${baseCategoryUrl}top_category=${topCategory.uniqueID}&parent_category_rn=${midCategory.uniqueID}&categoryId=${subCategory.uniqueID}`;
        subCategory.href = subUrl;
        subCategory.categories = normalizeCategories(subCategory.categories);
      });
    });
  });
  return updatedCategories;
};
