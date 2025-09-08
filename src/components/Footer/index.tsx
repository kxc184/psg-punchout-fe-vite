import { FOOTER_LOGO_URL } from "../../lib/constants";
const Footer = () => (
  <footer
    aria-label="footer"
    className="sw:w-full sw:flex sw:justify-center sw:bg-neutral-85 swdc-typeset-ui-3 sw:pt-2 sw:pb-1"
  >
    <div className="sw:container sw:mx-auto sw:max-w-[1440px] sw:py-8 sw:px-8">
      <div className="sw:flex sw:flex-row">
        <picture>
          <img
            alt="footer-img"
            className="sw:w-[162px] sw:h-[15px]"
            src={FOOTER_LOGO_URL}
          />
        </picture>
      </div>
      <ul className="sw:flex sw:flex-row sw:gap-6 sw:mt-4">
        <li className="sw:w-1/3">
          <div className=" sw:!space-y-4">
            <p>
              For special assistance contact your servicing store or call{" "}
              <a href="tel:844-552-7579" className="swdc-link-inline">
                844-552-7579
              </a>{" "}
              or email{" "}
              <a
                className="swdc-link-inline"
                href="mailto:punchout@sherwin-williams.com"
              >
                punchout@sherwin-williams.com
              </a>
            </p>
            <p>©2025 The Sherwin-Williams Company</p>
          </div>
        </li>
        <li className="sw:w-1/3">
          <ul className="sw:hover:cursor-pointer swdc-typeset-ui-3b sw:space-y-2">
            <li>
              <a
                className="swdc-link"
                href="http://privacy.sherwin-williams.com"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="swdc-link"
                href="http://punchout.sherwin-williams.com/privacy-policy"
                target="_blank"
              >
                P3P Policy
              </a>
            </li>
            <li>
              <a
                className="swdc-link"
                href="https://accessibility.sherwin-williams.com"
                target="_blank"
              >
                Accessibility Statement
              </a>
            </li>
            <li>
              <a
                className="swdc-link"
                href="http://sherwin-williams.com/terms-of-use"
                target="_blank"
              >
                Terms Of Use
              </a>
            </li>
            <li>
              <button className="swdc-link" id="footerDoNotSellInfoMyLink">
                Do Not Sell or Share My Personal Information
              </button>
            </li>
          </ul>
        </li>
        <li className="sw:w-1/3">
          <p>
            Due to screen limitations, colors seen here may not accurately
            reflect painted colors. To confirm your color choices, visit a
            Sherwin-Williams store and refer to our in-store color cards or
            Color to Go® color samples.
          </p>
        </li>
      </ul>
    </div>
  </footer>
);
export default Footer;
