import { describe, it, expect } from "vitest";
import { getThirdPartyScripts } from "../index";

describe("getThirdPartyScripts", () => {
  it("returns script elements from the mocked AEM endpoint", async () => {
    const scripts = await getThirdPartyScripts();
    expect(scripts).toBeTruthy();
    // Check for Ensighten Bootstrap.js script
    expect(
      scripts?.some(
        (el) =>
          el.props && el.props.src && el.props.src.includes("ensighten.com"),
      ),
    ).toBe(true);
    // Check for inline script content
    expect(
      scripts?.some(
        (el) =>
          typeof el.props.children === "string" &&
          el.props.children.includes("window.pypestreamConfig"),
      ),
    ).toBe(true);
  });
});
