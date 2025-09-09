export interface Channel {
  channelIdentifer: {
    channelName: string;
    uniqueID: string;
  };
  userData: string;
  description: {
    language: string;
    value: string;
  };
}

export interface OrderEditor {
  distinguishedName: string;
  externalIdentifier: {
    identifier: string;
  };
  uniqueID: string;
}

export interface OrderItem {
  unitUom: string;
  shippingChargeCurrency: string;
  lastUpdateDate: string;
  expectedShipDate: string;
  description: string;
  language: string;
  salesTax: string;
  correlationGroup: string;
  usableShippingChargePolicy: [
    {
      name: string;
      type: string;
      uniqueID: string;
    },
  ];
  shippingTax: string;
  orderItemStatus: string;
  offerID: string;
  currency: string;
  shippingCharge: string;
  orderItemPrice: string;
  shipModeLanguage: string;
  createDate: string;
  unitPrice: string;
  salesTaxCurrency: string;
  quantity: string;
  shipModeCode: string;
  productId: string;
  shipModeDescription: string;
  orderItemId: string;
  fulfillmentCenterId: string;
  fulfillmentCenterName: string;
  shipModeId: string;
  xitem_memberId: string;
  isExpedited: string;
  orderItemFulfillmentStatus: string;
  shippingTaxCurrency: string;
  carrier: string;
  UOM: string;
  freeGift: string;
  unitQuantity: string;
  contractId: string;
  partNumber: string;
  totalAdjustment: {
    currency: string;
    value: string;
  };
  orderItemInventoryStatus: string;
  productUrl: string;
}

export interface CartResponse {
  totalQuantity: string;
  totalShippingCharge: string;
  resourceId: string;
  orgUniqueID: string;
  orgDistinguishedName: string;
  orderId: string;
  lastUpdateDate: string;
  channel: Channel;
  orderStatus: string;
  x_isPurchaseOrderNumberRequired: string;
  totalShippingChargeCurrency: string;
  grandTotalCurrency: string;
  buyerId: string;
  recordSetCount: string;
  assignedCouponsUrl: string;
  x_isPersonalAddressesAllowedForShipping: string;
  storeNameIdentifier: string;
  usablePaymentInfoUrl: string;
  precheckoutUrl: string;
  totalProductPriceCurrency: string;
  totalProductPrice: string;
  locked: string;
  recordSetComplete: string;
  totalAdjustmentCurrency: string;
  totalSalesTaxCurrency: string;
  totalSalesTax: string;
  grandTotal: string;
  orderItem: OrderItem[];
  storeUniqueID: string;
  recordSetStartNumber: string;
  resourceName: string;
  recordSetTotal: string;
  shipAsComplete: string;
  x_trackingIds: string;
  shippingInfoUrl: string;
  checkoutUrl: string;
  totalShippingTax: string;
  assignedPromotionCodesUrl: string;
  usableShippingInfoUrl: string;
  totalShippingTaxCurrency: string;
  prepareIndicator: string;
  totalAdjustment: string;
  orderEditor: OrderEditor;
  paymentInstructionUrl: string;
}

export interface MiniCartData {
  quantity: string;
  totalPrice: string;
}
