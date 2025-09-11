import { CartResponse, MiniCartData } from "./types";

export const transformCart = (response: CartResponse) => {
  return response;
};

export const transformMiniCart = (response: CartResponse) => {
  const miniCartData = {
    quantity: response?.totalQuantity ?? "",
    totalPrice: response?.grandTotal ?? "",
  } as MiniCartData;

  return miniCartData;
};
