import { Outlet as Body } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useWscCtx } from "../api/wcs/useWscCtx";
import { useAccount } from "../api/account/useAccount";
import { useMegaMenu } from "../api/megamenu/useMegaMenu";
import FullPageSkeleton from "./FullPageSkeleton";
import UtilityNav from "../components/UtilityNav";
import BannerBoundry from "../components/Banner/BannerBoundry";

export default function Layout() {
  // Cache prime critical data for app
  const { data: ctx, isLoading: isLoadingCtx, error: errorCtx } = useWscCtx();
  const { isLoading: isLoadingMenu, error: errorMenu } = useMegaMenu(ctx);
  const { isLoading: isLoadingAccount, error: errorAccount } = useAccount();

  // Full loading page for all critical data
  if (isLoadingCtx || isLoadingMenu || isLoadingAccount) {
    return <FullPageSkeleton />;
  }

  // TODO: Handle Auth more gracefully, maybe a redirect to ajaxlogin?
  if (errorCtx || errorAccount || errorMenu) {
    throw new Error("Auth Error");
  }

  return (
    <main
      className={` sw:flex sw:min-h-screen sw:h-full sw:flex-col sw:items-center sw:bg-white`}
    >
      <UtilityNav />
      <BannerBoundry />
      <Header />
      <section className="sw:bg-[#eee] sw:container sw:max-w-[1090px] sw:mx-auto sw:flex sw:flex-col sw:flex-grow sw:flex-1 sw:h-full">
        <Body />
      </section>
      <Footer />
    </main>
  );
}
