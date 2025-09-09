import { transformMiniCart } from "./transform";
import { HCL_MINI_CART_ENDPOINT } from "../../lib/constants";

export const fetchMiniCart = async () => {
  const url = new URL(HCL_MINI_CART_ENDPOINT);
  const response = await fetch(url, { credentials: "include" });
  if (!response.ok) {
    throw new Error("Failed to fetch Mini Cart");
  }
  const cartResponse = await response.json();
  return transformMiniCart(cartResponse);
};
