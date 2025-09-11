import Footer from "../components/Footer";
import HeaderSkeletonMobile from "../components/Header/HeaderSkeletonMobile";

const FullpageSkeletonMobile = () => {
  return (
    <section className="sw:grid sw:grid-rows-[auto_1fr_auto] sw:min-h-screen">
      <HeaderSkeletonMobile />
      <div className="sw:flex sw:flex-col sw:gap-1 sw:p-1">
        <div className="sw:h-[300px] sw:w-full sw:bg-gray-300 sw:animate-pulse sw:rounded"></div>
        <div className="sw:h-full sw:w-full sw:bg-gray-300 sw:animate-pulse sw:rounded"></div>
      </div>
      <Footer />
    </section>
  );
};

export default FullpageSkeletonMobile;
