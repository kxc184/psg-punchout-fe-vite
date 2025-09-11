import UtilityNavSkeleton from "../components/UtilityNav/UtilityNavSkeleton";
import HeaderSkeleton from "../components/Header/HeaderSkeleton";
import Footer from "../components/Footer";

const FullPageSkeleton = () => {
  return (
    <section className="sw:w-full sw:mx-auto sw:flex sw:flex-col sw:min-h-screen">
      <UtilityNavSkeleton />
      <HeaderSkeleton />
      <div className="sw:flex sw:flex-1 sw:flex-col sw:bg-gray-100 sw:animate-pulse sw:rounded">
        <div className=" sw:mx-auto sw:w-[1090px] sw:flex  sw:gap-2  ">
          <div className="sw:flex sw:gap-2">
            <div className="sw:w-[268px] sw:h-full sw:bg-gray-300 sw:animate-pulse sw:rounded"></div>
          </div>
          <div className="sw:flex sw:flex-col sw:gap-2 sw:justify-end sw:w-full">
            <div className="sw:h-[324px] sw:w-full sw:bg-gray-300 sw:animate-pulse sw:rounded"></div>
            <div className="sw:h-[224px] sw:w-full sw:bg-gray-300 sw:animate-pulse sw:rounded"></div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FullPageSkeleton;
