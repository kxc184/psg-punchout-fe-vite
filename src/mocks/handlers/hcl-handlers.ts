/* eslint-disable no-loss-of-precision */
import { delay, http, HttpResponse } from "msw";

const hclContextResponse = {
  audit: {
    personalizationId: "1744049047170-41",
  },
  catalog: {
    catalogId: null,
    masterCatalog: false,
  },
  globalization: {
    preferredCurrency: "USD",
    languageId: -1,
    currency: "USD",
    preferredLanguageId: -1,
  },
  bcsversion: {
    lastUpdateTime: "1744049047209",
  },
  entitlement: {
    eligibleTradingAgreementIds: ["4000000000000260503"],
    hostingContractId: 4000000000000000501,
    currentTradingAgreementIds: [4000000000000175011],
    activeOrganizationId: "7000000000000959803",
    sessionTradingAgreementIds: null,
  },
  activityToken: {
    activityId: 498825053,
  },
  isPartiallyAuthenticated: false,
  basicInfo: {
    runAsId: 7039073,
    callerId: 6334002,
    registerType: "R",
    storeId: 10701,
    channelId: -1,
  },
};

// Minicart response uses the same domain as HCL
export const miniCartResponse = {
  totalShippingCharge: "0.00000",
  resourceId:
    "https://qav9-punchout.sherwin-williams.com:443/wcs/resources/store/10701/cart/@self",
  orgUniqueID: "7000000000000886258",
  orgDistinguishedName:
    "ou=655902476_01r2m100_an01011698851,o=3m,o=tag,o=sw buyer organization,o=root organization,dc=customers,dc=com",
  orderId: "2999860037",
  lastUpdateDate: "2025-01-21T17:46:38.570Z",
  channel: {
    channelIdentifer: {
      channelName: "Web Channel",
      uniqueID: "-1",
    },
    userData: null,
    description: {
      language: "-1",
      value: "Used when operations performed from a desktop browser.",
    },
  },
  orderStatus: "P",
  x_isPurchaseOrderNumberRequired: "false",
  totalShippingChargeCurrency: "USD",
  grandTotalCurrency: "USD",
  buyerId: "3057065",
  recordSetCount: "1",
  assignedCouponsUrl:
    "https://qav9-punchout.sherwin-williams.com:443/wcs/resources/store/10701/cart/@self/assigned_coupon",
  x_isPersonalAddressesAllowedForShipping: "true",
  storeNameIdentifier: "SherwinWilliamsPunchout",
  usablePaymentInfoUrl:
    "https://qav9-punchout.sherwin-williams.com:443/wcs/resources/store/10701/cart/@self/usable_payment_info",
  precheckoutUrl:
    "https://qav9-punchout.sherwin-williams.com:443/wcs/resources/store/10701/cart/@self/precheckout",
  totalProductPriceCurrency: "USD",
  totalProductPrice: "36.76000",
  locked: "true",
  recordSetComplete: "true",
  totalAdjustmentCurrency: "USD",
  totalSalesTaxCurrency: "USD",
  totalSalesTax: "0.00000",
  grandTotal: "36.76000",
  orderItem: [
    {
      unitUom: "C62",
      shippingChargeCurrency: "USD",
      lastUpdateDate: "2025-01-21T17:46:39.271Z",
      expectedShipDate: "2025-01-21T17:46:48.062Z",
      description: "Mail",
      language: "-1",
      salesTax: "0.00000",
      correlationGroup: "13905033",
      usableShippingChargePolicy: [
        {
          name: "StandardShippingChargeBySeller",
          type: "ShippingCharge",
          uniqueID: "-7001",
        },
      ],
      shippingTax: "0.00000",
      orderItemStatus: "P",
      offerID: "",
      currency: "USD",
      shippingCharge: "0.00000",
      orderItemPrice: "36.76000",
      shipModeLanguage: "-1",
      createDate: "2025-01-21T17:46:38.562Z",
      unitPrice: "36.76000",
      salesTaxCurrency: "USD",
      quantity: "1.0",
      shipModeCode: "Mail",
      productId: "17270",
      shipModeDescription: "Mail",
      orderItemId: "13905033",
      fulfillmentCenterId: "10551",
      fulfillmentCenterName: "SherwinWilliamsPunchout",
      shipModeId: "10701",
      xitem_memberId: "3057065",
      isExpedited: "false",
      orderItemFulfillmentStatus: "Unreleased",
      shippingTaxCurrency: "USD",
      carrier: "Mail",
      UOM: "C62",
      freeGift: "false",
      unitQuantity: "1.0",
      contractId: "4000000000000002002",
      partNumber: "650362783",
      totalAdjustment: {
        currency: "USD",
        value: "0.00000",
      },
      orderItemInventoryStatus: "Available",
      productUrl:
        "https://qav9-punchout.sherwin-williams.com:443/wcs/resources/store/10701/productview/byId/17270",
    },
  ],
  storeUniqueID: "10701",
  recordSetStartNumber: "0",
  resourceName: "cart",
  recordSetTotal: "1",
  shipAsComplete: "true",
  x_trackingIds: "",
  shippingInfoUrl:
    "https://qav9-punchout.sherwin-williams.com:443/wcs/resources/store/10701/cart/@self/shipping_info",
  checkoutUrl:
    "https://qav9-punchout.sherwin-williams.com:443/wcs/resources/store/10701/cart/@self/checkout",
  totalShippingTax: "0.00000",
  assignedPromotionCodesUrl:
    "https://qav9-punchout.sherwin-williams.com:443/wcs/resources/store/10701/cart/@self/assigned_promotion_code",
  usableShippingInfoUrl:
    "https://qav9-punchout.sherwin-williams.com:443/wcs/resources/store/10701/cart/@self/usable_shipping_info",
  totalShippingTaxCurrency: "USD",
  prepareIndicator: "false",
  totalAdjustment: "0.00000",
  orderEditor: {
    distinguishedName: "uid=gxm785,o=root organization,dc=customers,dc=com",
    externalIdentifier: {
      identifier: "uid=gxm785,o=root organization,dc=customers,dc=com",
    },
    uniqueID: "1726099",
  },
  paymentInstructionUrl:
    "https://qav9-punchout.sherwin-williams.com:443/wcs/resources/store/10701/cart/@self/payment_instruction",
};

const accountResponse = {
  orgEntityDisplayName: "WOODCREEK",
  accountNumber: "2524-3595-3",
};

// migration to v2 https://mswjs.io/docs/migrations/1.x-to-2.x/

const hclHandlers = [
  http.get(
    "/wcs/resources/store/10701/usercontext/@self/contextdata",
    async () => {
      await delay(2000); // 2 seconds
      return HttpResponse.json({ ...hclContextResponse }, { status: 200 });
    }
  ),
  http.get("/wcs/resources/store/10701/cart/@self", () => {
    return HttpResponse.json(miniCartResponse, { status: 200 });
  }),
  http.get(
    "/wcs/resources/store/10701/sw/usercontext/@self/contextdata",
    () => {
      return HttpResponse.json(accountResponse, { status: 200 });
    }
  ),
];

export default hclHandlers;
