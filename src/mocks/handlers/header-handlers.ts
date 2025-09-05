import { HttpResponse, http } from "msw";

export const mockSuccessfulHeaderResponse = {
  tradingPartner: {
    accountNumber: "6559-0247-6",
    name: "3M",
  },
  store: {
    number: "703221",
    phone: "(715) 835-4323",
    name: "EAU CLAIRE",
    hours: "7:00 AM - 6:00 PM",
  },
  links: [
    {
      name: "quickOrder",
      label: "Quick Order",
      enabled: true,
      href: "link",
    },
    {
      name: "myQuotes",
      label: "My Quotes",
      enabled: true,
      href: "link",
    },
    {
      name: "orderHistory",
      label: "Order History",
      enabled: true,
      href: "link",
    },
    {
      name: "pickupLocations",
      label: "Pickup Locations",
      enabled: true,
      href: "link",
    },
  ],
  cart: {
    quantity: "2",
    totalPrice: "100",
  },
};
export const mockEmptyLinkHeaderResponse = {
  ...mockSuccessfulHeaderResponse,
  links: [
    {
      name: "quickOrder",
      label: "Quick Order",
      enabled: false,
      href: "link",
    },
    {
      name: "myQuotes",
      label: "My Quotes",
      enabled: false,
      href: "link",
    },
    {
      name: "orderHistory",
      label: "Order History",
      enabled: false,
      href: "link",
    },
    {
      name: "pickupLocations",
      label: "Pickup Locations",
      enabled: false,
      href: "link",
    },
  ],
};

const headerHandlers = [
  http.get(
    /^https:\/\/dev-api\.sherwin-williams\.com\/punchout-bff\/header\/*/,
    () =>
      HttpResponse.json(
        { ...mockSuccessfulHeaderResponse },
        {
          status: 200,
        },
      ),
  ),
];

export default headerHandlers;
