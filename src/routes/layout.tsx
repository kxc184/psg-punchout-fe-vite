import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useWscCtx } from "../api/wcs/useWscCtx";
import { useAccount } from "../api/account/useAccount";
import { useMegaMenu } from "../api/megamenu/useMegaMenu";
import FullPageSkeleton from "./loading";

export default function Layout() {
  // Cache prime critical data for app
  const { data: ctx, isLoading: isLoadingCtx, error: errorCtx } = useWscCtx();
  const { isLoading: isLoadingMenu } = useMegaMenu(ctx);
  const { isLoading: isLoadingAccount, error: errorAccount } = useAccount();

  if (isLoadingCtx || isLoadingMenu || isLoadingAccount) {
    return <FullPageSkeleton />;
  }

  if (errorCtx || errorAccount) {
    // TODO: Handle Auth Error
    throw new Error("Auth Error");
  }

  return (
    <main
      className={` sw:flex sw:min-h-screen sw:h-full sw:flex-col sw:items-center sw:bg-white`}
    >
      <Header />
      <section className="sw:bg-[#eee] sw:container sw:max-w-[990px] sw:mx-auto sw:flex sw:flex-col sw:flex-grow sw:flex-1 sw:h-full">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
