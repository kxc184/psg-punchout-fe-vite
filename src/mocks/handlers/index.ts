import aemHandlers from "./aem-handlers";
import hclHandlers from "./hcl-handlers";
import headerHandlers from "./header-handlers";
import megaMenuHandlers from "./megamenu-handlers";
import searchHandlers from "./search-handlers";

export const handlers = [
  ...hclHandlers,
  ...megaMenuHandlers,
  ...searchHandlers,
  ...aemHandlers,
  ...headerHandlers,
];
