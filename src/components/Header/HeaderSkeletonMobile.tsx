const HeaderMobileSkeleton = () => {
  return (
    <div className="headerContainerMobile sw:md:hidden sw:w-full sw:animate-pulse">
      <div className=" sw:w-full sw:bg-[#373737]">
        <div className="sw:container sw:relative sw:max-w-[760px] sw:mx-auto">
          <div className="sw:flex sw:items-center sw:h-[115px]">
            <div>
              <picture>
                <img
                  className="  sw:pl-4 sw:object-fit "
                  src="/sherwin-williams-header-logo.png"
                  alt="Sherwin-Williams Logo"
                />
              </picture>
            </div>
          </div>
          <div className="sw:flex sw:items-center  sw:h-[45px] sw:w-full sw:bg-[#373737] sw:border-t-[#4c4c4c] sw:border-solid sw:border-y-[1px] sw:border-b-[#111] ">
            <div className="sw:w-[50px]">{/* MEGA MENU */}</div>
            <div className=" sw:w-full sw:bg-gray-300 sw:h-[22px] sw:rounded-sm sw:animate-pulse">
              {/* SEARCH */}
            </div>
            <div className="sw:w-[50px]">{/* MINI CART */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileSkeleton;
