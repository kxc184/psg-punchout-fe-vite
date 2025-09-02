import { Link } from "react-router";

const FullPageSkeleton = () => {
  return (
    <section className="sw:w-full sw:mx-auto sw:flex sw:flex-col sw:min-h-screen">
      <div className="sw:h-[72px] sw:min-w-[990px] sw:max-w-[1440px] sw:animate-pulse "></div>
      <div className="sw:hidden sw:md:block  sw:bg-pro-primary sw:text-white sw:py-[15px] sw:h-[183px] sw:animate-pulse">
        <div className="sw:container sw:max-w-[990px] sw:mx-auto sw:flex sw:items-center sw:justify-between">
          <div className="sw:flex sw:flex-col sw:w-full  sw:mt-[-.9rem]">
            <Link to="/">
              <picture>
                <img
                  className="sw:px-[30px] sw:py-[15px] sw:object-fit"
                  src="https://s7d1.scene7.com/is/image/sherwinwilliamsqa/sherwin-williams-header-logo?scl=1&fmt=png-alpha"
                  alt="Sherwin-Williams Logo"
                />
              </picture>
            </Link>
            <div className="  sw:h-[70px] sw:w-full sw:bg-[#001234] sw:flex "></div>
          </div>
        </div>
      </div>
      <div className="sw:flex sw:flex-1 sw:flex-col sw:bg-gray-100 sw:animate-pulse">
        <div className=" sw:container sw:mx-auto sw:w-[990px] sw:flex  sw:gap-2  ">
          <div className="sw:flex sw:gap-2">
            <div className="sw:w-[256px] sw:h-[424px] sw:bg-gray-300 sw:animate-pulse"></div>
          </div>
          <div className="sw:flex sw:flex-col sw:gap-2 sw:justify-end sw:w-full">
            <div className="sw:h-[324px] sw:w-full sw:bg-gray-300 sw:animate-pulse"></div>
            <div className="sw:h-[224px] sw:w-full sw:bg-gray-300 sw:animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="sw:h-[255px] sw:bg-gray-200 sw:animate-pulse"></div>
    </section>
  );
};

export default FullPageSkeleton;
