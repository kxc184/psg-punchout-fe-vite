import { AEM_SCRIPTS_ENDPOINT } from "@/lib/constants";
import Script from "next/script";
import { parse } from "node-html-parser";

/**
 * Server component to inject Ensighten/3rd-party scripts into <head>.
 * Fetches remote HTML, extracts <Script> tags, and renders them as Next.js <Script> components.
 * Usage: Place <ThirdPartyScripts /> in your layout or head. Requires AEM_SCRIPTS_URL env vars.
 */

export const getThirdPartyScripts = async (): Promise<JSX.Element[] | null> => {
  /**
   * Fetch and parse remote HTML, return array of <Script> elements or null on error.
   */

  if (!AEM_SCRIPTS_ENDPOINT) {
    console.warn("[Ensighten] Missing AEM_SCRIPTS_ENDPOINT");
    return null;
  }
  const res = await fetch(AEM_SCRIPTS_ENDPOINT);
  if (!res.ok) {
    console.error(
      "[Ensighten] Failed to fetch scripts",
      res.status,
      res.statusText,
    );
    return null;
  }
  const html = await res.text();
  const root = parse(html);
  return root.querySelectorAll("script").map((el, idx) => {
    const src = el.getAttribute("src") ?? undefined;
    const type = el.getAttribute("type") ?? undefined;
    const asyncAttr = el.getAttribute("async") !== null;
    const deferAttr = el.getAttribute("defer") !== null;
    const strategy = "afterInteractive";
    const scriptProps = {
      type,
      async: asyncAttr,
      defer: deferAttr,
    };
    if (src) {
      return (
        <Script {...scriptProps} key={idx} src={src} strategy={strategy} />
      );
    }
    return (
      <Script
        {...scriptProps}
        key={idx}
        id={`inline-script-${idx}`}
        strategy={strategy}
      >
        {el.innerHTML}
      </Script>
    );
  });
};
/**
 * Renders Ensighten/3rd-party scripts.
 */
const ThirdPartyScripts = async () => {
  const scripts = await getThirdPartyScripts();
  return <>{scripts}</>;
};
export default ThirdPartyScripts;
