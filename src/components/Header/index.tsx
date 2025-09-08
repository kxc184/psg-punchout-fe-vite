// import HeaderMobile from "./HeaderMobile";
import { Link } from "react-router";
// import HeaderMobile from "./HeaderMobile";
import StickyNav from "./StickyNav";

const Header = () => {
  return (
    <>
      {/* screen sizes below md will show mobile version of header and hide desktop version, vise versa */}
      {/* <HeaderMobile miniCartData={miniCartData} megaMenuData={megaMenuData} /> */}
      <section className="sw:hidden sw:md:block sw:w-full sw:mx-auto">
        <div className=" sw:w-full sw:bg-repeat sw:bg-center sw:bg-pro-primary sw:shadow-lg ">
          <div className="sw:container sw:relative sw:max-w-[1090px] sw:mx-auto sw:flex sw:items-center sw:justify-start">
            <Link to="/">
              <picture>
                <img
                  className="  sw:py-3 sw:object-fit "
                  src="/sherwin-williams-header-logo.png"
                  alt="Sherwin-Williams Logo"
                />
              </picture>
            </Link>
          </div>
        </div>
      </section>
      <StickyNav />
    </>
  );
};

export default Header;
