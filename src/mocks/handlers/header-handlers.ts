import { HttpResponse, http } from "msw";

export const mockSuccessfulHeaderResponse = {
  tradingPartner: {
    accountNumber: "2791-2298-0",
    name: "WOODCREEK",
  },
  store: {
    address: "18836 State Highway 305 Ne",
    city: "Poulsbo",
    zip: "98370-6234",
    state: "WA",
    country: "USA",
    number: "701856",
    phone: "(360) 598-1717",
    name: "Poulsbo",
    openHours: "7:00 AM - 6:00 PM",
  },
  links: [
    {
      name: "quickOrder",
      label: "Quick Order",
      enabled: true,
      href: "/QuickOrderView?catalogId=10551&storeId=10701&langId=-1",
    },
    {
      name: "myQuotes",
      label: null,
      enabled: false,
      href: null,
    },
    {
      name: "orderHistory",
      label: "Order History",
      enabled: true,
      href: "/TrackOrderStatus?catalogId=10551&storeId=10701&langId=-1&showOrderHeader=false&orderStatusStyle=strong",
    },
    {
      name: "pickLocation",
      label: null,
      enabled: false,
      href: null,
    },
    {
      name: "backToLocationSelection",
      label: "Back to Location Selection",
      enabled: true,
      href: "/RestoreOriginalUserSetInSession?catalogId=10551&storeId=10701&langId=-1&URL=SWAdminPunchoutGetLocations",
    },
  ],
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
        }
      )
  ),
];

export default headerHandlers;
