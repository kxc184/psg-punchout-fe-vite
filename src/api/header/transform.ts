import { ISuccessfulHeaderResponseApi } from "./types";

export const transformHeader = (data: ISuccessfulHeaderResponseApi) => {
  // Reformat account number to XXX-XXXX-XXX
  const rawAccountNumber =
    data.tradingPartner?.accountNumber?.replace(/\D/g, "") ?? "";
  const formattedAccountNumber =
    rawAccountNumber.length === 9
      ? `${rawAccountNumber.slice(0, 4)}-${rawAccountNumber.slice(
          4,
          8
        )}-${rawAccountNumber.slice(8)}`
      : data.tradingPartner?.accountNumber;
  const tradingPartnerData = {
    name: data.tradingPartner?.name,
    accountNumber: formattedAccountNumber,
  };
  const locationSelectionLink = data.links.find(
    (link) => link.name === "backToLocationSelection"
  );
  const links = data.links.filter(
    (link) => link.name !== "backToLocationSelection"
  );
  return {
    tradingPartner: tradingPartnerData,
    store: data.store,
    links: links,
    locationSelectionLink,
  };
};
