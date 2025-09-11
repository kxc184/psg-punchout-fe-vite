// ==================== ENV VARS ====================
export const PUO_SW_HOST = import.meta.env.VITE_PUO_SW_HOST;
export const API_SW_HOST = import.meta.env.VITE_API_SW_HOST;
export const SW_HOST = import.meta.env.VITE_SW_HOST;

// ==================== ENDPOINTS ====================
export const AEM_SCRIPTS_ENDPOINT = `${SW_HOST}/en-us/hclhead.customheaderlibs`;
export const SEARCH_ENDPOINT = `${API_SW_HOST}/punchout-bff/mega-menu`;
export const AUTOSUGGEST_ENDPOINT = `${API_SW_HOST}/punchout-bff/products/auto-suggestion`;
export const HEADER_ENDPOINT = `${API_SW_HOST}/punchout-bff/header`;
export const HCL_MINI_CART_ENDPOINT = `${PUO_SW_HOST}/wcs/resources/store/10701/cart/@self`;
export const HCL_CONTEXT_ENDPOINT = `/wcs/resources/store/10701/usercontext/@self/contextdata`;
export const HCL_ACCOUNT_ENDPOINT = `/wcs/resources/store/10701/sw/usercontext/@self/contextdata`;

// ==================== PROXY CONFIG ====================

export const PROXY_AEM_SCRIPTS_ENDPOINT = `/en-us/hclhead.customheaderlibs`;
export const PROXY_SEARCH_ENDPOINT = `/punchout-bff/mega-menu`;
export const PROXY_AUTOSUGGEST_ENDPOINT = `/punchout-bff/products/auto-suggestion`;

// ==================== ROUTES ====================
export const HOMEPAGE = ["/", "/en-us"];
export const SEE_ALL_PRODUCTS_ROUTE = `https://dev-punchout.sherwin-williams.com/SearchDisplay?catalogId=10551&storeId=10701&searchTerm=`;

// ==================== UI CONSTANTS ====================
export const AUTO_SUGGEST_CONFIG = {
  PLACE_HOLDER: {
    SEARCH: "What are you looking for?",
  },
} as const;

// ==================== BRANDING ====================
export const FOOTER_LOGO_URL =
  "https://s7d2.scene7.com/is/content/sherwinwilliams/logo-text?ts=1752693792461&fmt=png-alpha&dpr=off";
