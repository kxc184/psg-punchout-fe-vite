import { MiniCartData, OrderItem } from ".";

export const transformMiniCart = (totalPrice: string, items: OrderItem[]) => {
  const calculatedTally = items.reduce(
    (accumulator, { quantity }) => accumulator + parseInt(quantity),
    0,
  );
  const miniCartData = {
    tally: calculatedTally,
    total: parseFloat(totalPrice),
  } as MiniCartData;

  return miniCartData;
};
