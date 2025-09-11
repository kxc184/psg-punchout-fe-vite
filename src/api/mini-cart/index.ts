import { transformMiniCart } from "./transform";
import { HCL_MINI_CART_ENDPOINT } from "../../lib/constants";
import { HttpError } from "../HttpError";

export const fetchMiniCart = async () => {
  const url = new URL(HCL_MINI_CART_ENDPOINT);
  const response = await fetch(url, { credentials: "include" });
  if (!response.ok) {
    throw new HttpError("Failed to fetch Mini Cart", response.status);
  }
  const cartResponse = await response.json();
  return transformMiniCart(cartResponse);
};
