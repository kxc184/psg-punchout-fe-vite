import JSONBig from "json-bigint";
import { IWcsCtx } from ".";

export function transformWcsCtx(ctx: string): IWcsCtx {
  try {
    const parsed = JSONBig.parse(ctx);
    const entitlement = parsed?.entitlement ?? {};

    return {
      organizationId: entitlement.activeOrganizationId?.toString?.() ?? "",
      contractId:
        entitlement.eligibleTradingAgreementIds?.[0]?.toString?.() ?? "",
    };
  } catch (e) {
    console.error("Failed transforming...", e);
    throw e;
  }
}
