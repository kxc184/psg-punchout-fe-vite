import { transformMiniCart } from "./transform";
import { HCL_MINI_CART_ENDPOINT } from "../../lib/constants";
import { HttpError } from "../HttpError";

export const fetchMiniCart = async () => {
  const url = new URL(HCL_MINI_CART_ENDPOINT);
  console.log("minicart endpt", HCL_MINI_CART_ENDPOINT)
  const response = await fetch(url, { credentials: "include" });
  console.log("minicart response", response)
  if (!response.ok) {
    throw new HttpError("Failed to fetch Mini Cart", response.status);
  }
  const cartResponse = await response.json();
  return transformMiniCart(cartResponse);
};
