/*
  LAYOUT GRID ROWS EXPLANATION:

  grid-rows-[auto_auto_auto_1fr_auto] is used because:
    1. Header
    2. StickyNav (which includes a sentinel for Intersection Observer sticky logic)
    3. [Sentinel] (invisible, but required for JS sticky detection)
    4. Body section (fills remaining space, 1fr)
    5. Footer

  NOTE: The sentinel is required for sticky JS logic and must remain in the document flow.
  Changing the number/order of grid rows or moving StickyNav/sentinel may break sticky behavior.
  This is a known layout complexity—do not refactor without understanding the sticky requirements!
*/

import { Outlet as Body } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useWscCtx } from "../api/wcs/useWscCtx";
import { useAccount } from "../api/account/useAccount";
import { useMegaMenu } from "../api/megamenu/useMegaMenu";
import FullPageSkeleton from "./FullPageSkeleton";

import StickyNav from "../components/Header/StickyNav";
import FullpageSkeletonMobile from "./FullpageSkeletonMobile";

export default function Layout() {
  // Cache prime critical data for app
  const { data: ctx, isLoading: isLoadingCtx, error: errorCtx } = useWscCtx();
  const { isLoading: isLoadingMenu, error: errorMenu } = useMegaMenu(ctx);
  const { isLoading: isLoadingAccount, error: errorAccount } = useAccount();

  // Full loading page for all critical data
  if (isLoadingCtx || isLoadingMenu || isLoadingAccount) {
    return (
      <>
        <main className="sw:hidden sw:md:block">
          <FullPageSkeleton />
        </main>
        <main className="sw:block sw:md:hidden">
          <FullpageSkeletonMobile />
        </main>
      </>
    );
  }

  // TODO: Handle Auth more gracefully, maybe a redirect to ajaxlogin?
  if (errorCtx || errorAccount || errorMenu) {
    throw new Error("Auth Error");
  }

  return (
    <main
      className={`sw:grid sw:grid-rows-[auto_auto_1fr_auto] sw:md:grid-rows-[auto_auto_auto_1fr_auto] sw:min-h-screen sw:bg-white`}
    >
      <Header />
      <StickyNav />
      <section className="sw:container sw:max-w-[1090px] sw:mx-auto ">
        <Body />
      </section>
      <Footer />
    </main>
  );
}
