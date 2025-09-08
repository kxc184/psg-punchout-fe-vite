const HeaderSkeleton = () => (
  <section className="sw:w-full sw:bg-pro-primary sw:shadow-lg">
    <div className="sw:container sw:max-w-[1090px] sw:mx-auto sw:flex sw:items-center sw:justify-start sw:h-full">
      <div className="sw:flex sw:flex-col sw:w-full">
        <picture>
          <img
            className="sw:py-3 sw:object-fit"
            src="/sherwin-williams-header-logo.png"
            alt="Sherwin-Williams Logo"
          />
        </picture>
      </div>
    </div>
    <nav className=" sw:hidden sw:md:block sw:sticky sw:top-0 sw:bg-pro-primary sw:w-full">
      <ul className="sw:relative sw:flex sw:gap-1 sw:h-[83px] sw:bg-[#001234] sw:animate-pulse sw:rounded-md sw:max-w-[1090px] sw:mx-auto "></ul>
    </nav>
  </section>
);

export default HeaderSkeleton;
